import type {
    DetailedEpisodeViewQuery as DetailedEpisodeViewQueryType,
} from './__generated__/DetailedEpisodeViewQuery.graphql';
import type { ErrorBoundary } from 'react-error-boundary';

import DetailedEpisodeViewQuery from './__generated__/DetailedEpisodeViewQuery.graphql';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';

import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import LoadingSuspense from 'LoadingSuspense';
import DetailedEpisodeViewRoot from './DetailedEpisodeViewRoot';

type LoadedProps = {
    data: PreloadedQuery<DetailedEpisodeViewQueryType>
}

type Params = {
    id: string
}

function DetailedEpisodeView(props: LoadedProps) {
    const data = usePreloadedQuery(
        graphql`
            query DetailedEpisodeViewQuery($id: ID!) {
                tv {
                    episode(id: $id) {
                        ...DetailedEpisodeViewRoot_episode
                    }
                }
            }
        `,
        props.data,
    );

    return (
        <DetailedEpisodeViewRoot episode={data.tv.episode} />
    );
}

function DetailedEpisodeViewWrapper() {
    const { id } = useParams<Params>();
    const [
        data,
        loadQuery,
        dispose,
    ] = useQueryLoader<DetailedEpisodeViewQueryType>(DetailedEpisodeViewQuery);

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
            {data != null && <DetailedEpisodeView data={data}/>}
        </LoadingSuspense>
    );
}

export default DetailedEpisodeViewWrapper;
