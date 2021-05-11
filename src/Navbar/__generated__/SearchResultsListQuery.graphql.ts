/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchResultsListQueryVariables = {
    term: string;
};
export type SearchResultsListQueryResponse = {
    readonly search: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"SearchResult_result">;
            } | null;
        } | null> | null;
    };
};
export type SearchResultsListQuery = {
    readonly response: SearchResultsListQueryResponse;
    readonly variables: SearchResultsListQueryVariables;
};



/*
query SearchResultsListQuery(
  $term: String!
) {
  search(term: $term, first: 5) {
    edges {
      node {
        __typename
        ...SearchResult_result
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
  }
}

fragment MovieLinkContainer_movie on Movie {
  id
}

fragment MovieSearchResult_movie on Movie {
  ...MovieLinkContainer_movie
  title
  overview
  poster(size: W185)
}

fragment PersonLinkContainer_person on Person {
  id
}

fragment PersonSearchResult_person on Person {
  ...PersonLinkContainer_person
  name
  profilePicture(size: W185)
  ...useKnownForDescription_person
}

fragment SearchResult_result on MovieOrTVOrPeople {
  __isMovieOrTVOrPeople: __typename
  __typename
  ... on Movie {
    ...MovieSearchResult_movie
  }
  ... on Person {
    ...PersonSearchResult_person
  }
}

fragment useKnownForDescription_person on Person {
  knownFor {
    __typename
    ... on Movie {
      title
    }
    ... on TVShow {
      name
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "term"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  },
  {
    "kind": "Variable",
    "name": "term",
    "variableName": "term"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "size",
    "value": "W185"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchResultsListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MovieOrTVOrPeopleConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MovieOrTVOrPeopleEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "SearchResult_result"
                  }
                ],
                "storageKey": null
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
    "name": "SearchResultsListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MovieOrTVOrPeopleConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MovieOrTVOrPeopleEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isMovieOrTVOrPeople"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "overview",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
                        "kind": "ScalarField",
                        "name": "poster",
                        "storageKey": "poster(size:\"W185\")"
                      }
                    ],
                    "type": "Movie",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
                        "kind": "ScalarField",
                        "name": "profilePicture",
                        "storageKey": "profilePicture(size:\"W185\")"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "knownFor",
                        "plural": true,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v4/*: any*/)
                            ],
                            "type": "Movie",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v6/*: any*/)
                            ],
                            "type": "TVShow",
                            "abstractKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Person",
                    "abstractKey": null
                  },
                  (v7/*: any*/)
                ],
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
    "cacheID": "7db36836fb19b77eb8d98fa61bdd0df0",
    "id": null,
    "metadata": {},
    "name": "SearchResultsListQuery",
    "operationKind": "query",
    "text": "query SearchResultsListQuery(\n  $term: String!\n) {\n  search(term: $term, first: 5) {\n    edges {\n      node {\n        __typename\n        ...SearchResult_result\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment MovieLinkContainer_movie on Movie {\n  id\n}\n\nfragment MovieSearchResult_movie on Movie {\n  ...MovieLinkContainer_movie\n  title\n  overview\n  poster(size: W185)\n}\n\nfragment PersonLinkContainer_person on Person {\n  id\n}\n\nfragment PersonSearchResult_person on Person {\n  ...PersonLinkContainer_person\n  name\n  profilePicture(size: W185)\n  ...useKnownForDescription_person\n}\n\nfragment SearchResult_result on MovieOrTVOrPeople {\n  __isMovieOrTVOrPeople: __typename\n  __typename\n  ... on Movie {\n    ...MovieSearchResult_movie\n  }\n  ... on Person {\n    ...PersonSearchResult_person\n  }\n}\n\nfragment useKnownForDescription_person on Person {\n  knownFor {\n    __typename\n    ... on Movie {\n      title\n    }\n    ... on TVShow {\n      name\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7472b51ac2cd673794c6c19c1d32f7a4';
export default node;
