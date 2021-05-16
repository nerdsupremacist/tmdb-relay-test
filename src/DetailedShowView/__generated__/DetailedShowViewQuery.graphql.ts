/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedShowViewQueryVariables = {
    id: string;
};
export type DetailedShowViewQueryResponse = {
    readonly tv: {
        readonly show: {
            readonly " $fragmentRefs": FragmentRefs<"DetailedShowViewRoot_show">;
        };
    };
};
export type DetailedShowViewQuery = {
    readonly response: DetailedShowViewQueryResponse;
    readonly variables: DetailedShowViewQueryVariables;
};



/*
query DetailedShowViewQuery(
  $id: ID!
) {
  tv {
    show(id: $id) {
      ...DetailedShowViewRoot_show
      id
    }
  }
}

fragment DetailedShowViewRoot_show on TVShow {
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DetailedShowViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TV",
        "kind": "LinkedField",
        "name": "tv",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "TVShow",
            "kind": "LinkedField",
            "name": "show",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DetailedShowViewRoot_show"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DetailedShowViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TV",
        "kind": "LinkedField",
        "name": "tv",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "TVShow",
            "kind": "LinkedField",
            "name": "show",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a02f416bd55df43a8d656070ada7d56d",
    "id": null,
    "metadata": {},
    "name": "DetailedShowViewQuery",
    "operationKind": "query",
    "text": "query DetailedShowViewQuery(\n  $id: ID!\n) {\n  tv {\n    show(id: $id) {\n      ...DetailedShowViewRoot_show\n      id\n    }\n  }\n}\n\nfragment DetailedShowViewRoot_show on TVShow {\n  name\n}\n"
  }
};
})();
(node as any).hash = 'facbe85e194eaab6f90cd69a2423c2de';
export default node;
