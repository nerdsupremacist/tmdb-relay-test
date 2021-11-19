/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type StreamingLinkFormDataProviderQueryVariables = {};
export type StreamingLinkFormDataProviderQueryResponse = {
    readonly streaming: {
        readonly myCountry: {
            readonly id: string;
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
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
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
      {
        "alias": null,
        "args": null,
        "concreteType": "StreamingCountry",
        "kind": "LinkedField",
        "name": "countries",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "StreamingProvider",
        "kind": "LinkedField",
        "name": "providers",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "StreamingLinkFormDataProviderQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "StreamingLinkFormDataProviderQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "0074e0aa23c6e680aad3b795e3ee29f5",
    "id": null,
    "metadata": {},
    "name": "StreamingLinkFormDataProviderQuery",
    "operationKind": "query",
    "text": "query StreamingLinkFormDataProviderQuery {\n  streaming {\n    myCountry {\n      id\n    }\n    countries {\n      name\n      id\n    }\n    providers {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bfa4f8ad52730f2d0f083b417e83b61c';
export default node;
