/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedPersonViewQueryVariables = {
    id: number;
};
export type DetailedPersonViewQueryResponse = {
    readonly people: {
        readonly person: {
            readonly " $fragmentRefs": FragmentRefs<"DetailedPersonViewRoot_person">;
        };
    };
};
export type DetailedPersonViewQuery = {
    readonly response: DetailedPersonViewQueryResponse;
    readonly variables: DetailedPersonViewQueryVariables;
};



/*
query DetailedPersonViewQuery(
  $id: Int!
) {
  people {
    person(id: $id) {
      ...DetailedPersonViewRoot_person
    }
  }
}

fragment DetailedPersonViewRoot_person on DetailedPerson {
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
    "name": "DetailedPersonViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "People",
        "kind": "LinkedField",
        "name": "people",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "DetailedPerson",
            "kind": "LinkedField",
            "name": "person",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DetailedPersonViewRoot_person"
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
    "name": "DetailedPersonViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "People",
        "kind": "LinkedField",
        "name": "people",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "DetailedPerson",
            "kind": "LinkedField",
            "name": "person",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
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
    "cacheID": "60919112a309814b73e6c97565564362",
    "id": null,
    "metadata": {},
    "name": "DetailedPersonViewQuery",
    "operationKind": "query",
    "text": "query DetailedPersonViewQuery(\n  $id: Int!\n) {\n  people {\n    person(id: $id) {\n      ...DetailedPersonViewRoot_person\n    }\n  }\n}\n\nfragment DetailedPersonViewRoot_person on DetailedPerson {\n  name\n}\n"
  }
};
})();
(node as any).hash = '1df6950893419d7f580b2427dd9e2454';
export default node;
