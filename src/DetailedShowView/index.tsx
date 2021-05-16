import type { DetailedShowViewQuery as DetailedShowViewQueryType } from './__generated__/DetailedShowViewQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';

import DetailedShowViewQuery from './__generated__/DetailedShowViewQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';

import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingSuspense from 'LoadingSuspense';
import DetailedShowViewRoot from './DetailedShowViewRoot';

type LoadedProps = {
    data: PreloadedQuery<DetailedShowViewQueryType>
}

type Params = {
    id: string
}

function DetailedShowView(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query DetailedShowViewQuery($id: ID!) {
                tv {
                    show(id: $id) {
                        ...DetailedShowViewRoot_show
                    }
                }
            }
        `,
        props.data,
    );

    return (
        <DetailedShowViewRoot show={data.tv.show} />
    );
}

function DetailedShowViewWrapper() {
    const { id } = useParams<Params>();
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<DetailedShowViewQueryType>(DetailedShowViewQuery);

    const error = useRef<ErrorBoundary>(null);
    useEffect(() => {
        error.current?.reset();
        loadQuery({ id });
        return () => {
            dispose();
        };
    }, [id, dispose, loadQuery]);

    return (
        <LoadingSuspense boundaryRef={error}>
            {data != null && <DetailedShowView data={data}/>}
        </LoadingSuspense>
    );
}

export default DetailedShowViewWrapper;
