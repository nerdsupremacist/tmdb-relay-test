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
  ...KnownForList_person
}

fragment KnownForList_person on Person {
  knownFor {
    __typename
    ...MovieOrShowResult_result
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment MovieLinkContainer_movie on Movie {
  id
}

fragment MovieListItem_movie on Movie {
  ...MovieLinkContainer_movie
  title
  poster(size: W154)
}

fragment MovieOrShowResult_result on MovieOrTV {
  __isMovieOrTV: __typename
  __typename
  ... on Movie {
    ...MovieListItem_movie
  }
  ... on TVShow {
    ...ShowListItem_show
  }
}

fragment PersonHeader_person on Person {
  name
  profilePicture(size: W185)
  knownForDepartment
  placeOfBirth
}

fragment ShowListItem_show on TVShow {
  name
  poster(size: W154)
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "size",
      "value": "W154"
    }
  ],
  "kind": "ScalarField",
  "name": "poster",
  "storageKey": "poster(size:\"W154\")"
};
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
              (v2/*: any*/),
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
                "concreteType": null,
                "kind": "LinkedField",
                "name": "knownFor",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isMovieOrTV"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
                    "type": "Movie",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/)
                    ],
                    "type": "TVShow",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "193d69aba57beebef825c546f5195e36",
    "id": null,
    "metadata": {},
    "name": "DetailedPersonViewQuery",
    "operationKind": "query",
    "text": "query DetailedPersonViewQuery(\n  $id: ID!\n) {\n  people {\n    person(id: $id) {\n      ...DetailedPersonViewRoot_person\n      id\n    }\n  }\n}\n\nfragment DetailedPersonViewRoot_person on Person {\n  ...PersonHeader_person\n  biography\n  ...KnownForList_person\n}\n\nfragment KnownForList_person on Person {\n  knownFor {\n    __typename\n    ...MovieOrShowResult_result\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment MovieLinkContainer_movie on Movie {\n  id\n}\n\nfragment MovieListItem_movie on Movie {\n  ...MovieLinkContainer_movie\n  title\n  poster(size: W154)\n}\n\nfragment MovieOrShowResult_result on MovieOrTV {\n  __isMovieOrTV: __typename\n  __typename\n  ... on Movie {\n    ...MovieListItem_movie\n  }\n  ... on TVShow {\n    ...ShowListItem_show\n  }\n}\n\nfragment PersonHeader_person on Person {\n  name\n  profilePicture(size: W185)\n  knownForDepartment\n  placeOfBirth\n}\n\nfragment ShowListItem_show on TVShow {\n  name\n  poster(size: W154)\n}\n"
  }
};
})();
(node as any).hash = 'd8fbdbb02d00be8c295d60b649211271';
export default node;
