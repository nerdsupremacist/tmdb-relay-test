
import type { FetchFunction } from 'relay-runtime';

import {
    Environment,
    Network,
    RecordSource,
    Store,
} from 'relay-runtime';

import { GRAPHQL_URL } from 'utils/constants';

const fetchQuery: FetchFunction = async (
    operation,
    variables,
) => {
    const response = await fetch(GRAPHQL_URL, {
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
    });

    return response.json();
};

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
    network,
    store,
});

export default environment;
