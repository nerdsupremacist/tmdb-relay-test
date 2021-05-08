import type {
    DetailedPersonViewQuery as DetailedPersonViewQueryType,
} from './__generated__/DetailedPersonViewQuery.graphql';

import DetailedPersonViewQuery from './__generated__/DetailedPersonViewQuery.graphql';

import React from 'react';
import { useParams } from 'react-router';

import { loadQuery, PreloadedQuery, usePreloadedQuery, useRelayEnvironment } from 'react-relay';
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
            query DetailedPersonViewQuery($id: Int!) {
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
    const environment = useRelayEnvironment();
    const data = loadQuery<DetailedPersonViewQueryType>(environment, DetailedPersonViewQuery, { id: parseInt(id) });

    return (
        <LoadingSuspense>
            <DetailedPersonView data={data}/>
        </LoadingSuspense>
    );
}

export default DetailedPersonViewWrapper;
