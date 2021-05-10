import type {
    DetailedPersonViewQuery as DetailedPersonViewQueryType,
} from './__generated__/DetailedPersonViewQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';

import DetailedPersonViewQuery from './__generated__/DetailedPersonViewQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';

import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingSuspense from 'LoadingSuspense';
import DetailedPersonViewRoot from './DetailedPersonViewRoot';

type LoadedProps = {
    data: PreloadedQuery<DetailedPersonViewQueryType>
}

type Params = {
    id: string
}

function DetailedPersonView(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query DetailedPersonViewQuery($id: ID!) {
                people {
                    person(id: $id) {
                        ...DetailedPersonViewRoot_person
                    }
                }
            }
        `,
        props.data,
    );

    return (
        <DetailedPersonViewRoot person={data.people.person} />
    );
}

function DetailedPersonViewWrapper() {
    const { id } = useParams<Params>();
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<DetailedPersonViewQueryType>(DetailedPersonViewQuery);

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
            {data != null && <DetailedPersonView data={data}/>}
        </LoadingSuspense>
    );
}

export default DetailedPersonViewWrapper;
