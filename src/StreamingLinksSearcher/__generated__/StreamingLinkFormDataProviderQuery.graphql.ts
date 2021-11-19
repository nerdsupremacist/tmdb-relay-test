/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type StreamingLinkFormDataProviderQueryVariables = {};
export type StreamingLinkFormDataProviderQueryResponse = {
    readonly streaming: {
        readonly myCountry: {
            readonly name: string;
        } | null;
        readonly countries: ReadonlyArray<{
            readonly name: string;
            readonly id: string;
        }>;
        readonly providers: ReadonlyArray<{
            readonly id: string;
            readonly name: string;
        }>;
    };
};
export type StreamingLinkFormDataProviderQuery = {
    readonly response: StreamingLinkFormDataProviderQueryResponse;
    readonly variables: StreamingLinkFormDataProviderQueryVariables;
};



/*
query StreamingLinkFormDataProviderQuery {
  streaming {
    myCountry {
      name
      id
    }
    countries {
      name
      id
    }
    providers {
      id
      name
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "StreamingCountry",
  "kind": "LinkedField",
  "name": "countries",
  "plural": true,
  "selections": (v2/*: any*/),
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "StreamingProvider",
  "kind": "LinkedField",
  "name": "providers",
  "plural": true,
  "selections": [
    (v1/*: any*/),
    (v0/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "StreamingLinkFormDataProviderQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Streaming",
        "kind": "LinkedField",
        "name": "streaming",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "StreamingCountry",
            "kind": "LinkedField",
            "name": "myCountry",
            "plural": false,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "StreamingLinkFormDataProviderQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Streaming",
        "kind": "LinkedField",
        "name": "streaming",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "StreamingCountry",
            "kind": "LinkedField",
            "name": "myCountry",
            "plural": false,
            "selections": (v2/*: any*/),
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "862b9c331dbb4818c6025fdecc4e00f9",
    "id": null,
    "metadata": {},
    "name": "StreamingLinkFormDataProviderQuery",
    "operationKind": "query",
    "text": "query StreamingLinkFormDataProviderQuery {\n  streaming {\n    myCountry {\n      name\n      id\n    }\n    countries {\n      name\n      id\n    }\n    providers {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'eab14c99d26c9bb08de4b5e037329f7d';
export default node;
