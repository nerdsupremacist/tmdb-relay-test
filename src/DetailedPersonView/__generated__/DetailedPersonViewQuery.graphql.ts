/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedPersonViewQueryVariables = {
    id: string;
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
  $id: ID!
) {
  people {
    person(id: $id) {
      ...DetailedPersonViewRoot_person
      id
    }
  }
}

fragment DetailedPersonViewRoot_person on Person {
  ...PersonHeader_person
  biography
}

fragment PersonHeader_person on Person {
  name
  profilePicture(size: W185)
  knownForDepartment
  placeOfBirth
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
            "concreteType": "Person",
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
            "concreteType": "Person",
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
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "size",
                    "value": "W185"
                  }
                ],
                "kind": "ScalarField",
                "name": "profilePicture",
                "storageKey": "profilePicture(size:\"W185\")"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "knownForDepartment",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "placeOfBirth",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "biography",
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
    "cacheID": "222dd9c8febbceb1c3f659a5e51e2c3f",
    "id": null,
    "metadata": {},
    "name": "DetailedPersonViewQuery",
    "operationKind": "query",
    "text": "query DetailedPersonViewQuery(\n  $id: ID!\n) {\n  people {\n    person(id: $id) {\n      ...DetailedPersonViewRoot_person\n      id\n    }\n  }\n}\n\nfragment DetailedPersonViewRoot_person on Person {\n  ...PersonHeader_person\n  biography\n}\n\nfragment PersonHeader_person on Person {\n  name\n  profilePicture(size: W185)\n  knownForDepartment\n  placeOfBirth\n}\n"
  }
};
})();
(node as any).hash = 'd8fbdbb02d00be8c295d60b649211271';
export default node;
