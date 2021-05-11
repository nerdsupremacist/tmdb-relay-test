/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SimilarMovieListPaginationQueryVariables = {
    count: number;
    cursor?: string | null;
    id: string;
};
export type SimilarMovieListPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"SimilarMovieList_movie">;
    } | null;
};
export type SimilarMovieListPaginationQuery = {
    readonly response: SimilarMovieListPaginationQueryResponse;
    readonly variables: SimilarMovieListPaginationQueryVariables;
};



/*
query SimilarMovieListPaginationQuery(
  $count: Int!
  $cursor: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...SimilarMovieList_movie_1G22uz
    id
  }
}

fragment MovieLinkContainer_movie on Movie {
  id
}

fragment RelatedMovie_movie on Movie {
  ...MovieLinkContainer_movie
  title
  poster(size: W154)
}

fragment SimilarMovieList_movie_1G22uz on Movie {
  similar(first: $count, after: $cursor) {
    edges {
      node {
        ...RelatedMovie_movie
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
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
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SimilarMovieListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              }
            ],
            "kind": "FragmentSpread",
            "name": "SimilarMovieList_movie"
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
    "name": "SimilarMovieListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "MovieConnection",
                "kind": "LinkedField",
                "name": "similar",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MovieEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Movie",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          {
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
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "SimilarMovieList_movie_similar",
                "kind": "LinkedHandle",
                "name": "similar"
              }
            ],
            "type": "Movie",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e0f9e50f8aba065cc75358d80f8e4823",
    "id": null,
    "metadata": {},
    "name": "SimilarMovieListPaginationQuery",
    "operationKind": "query",
    "text": "query SimilarMovieListPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...SimilarMovieList_movie_1G22uz\n    id\n  }\n}\n\nfragment MovieLinkContainer_movie on Movie {\n  id\n}\n\nfragment RelatedMovie_movie on Movie {\n  ...MovieLinkContainer_movie\n  title\n  poster(size: W154)\n}\n\nfragment SimilarMovieList_movie_1G22uz on Movie {\n  similar(first: $count, after: $cursor) {\n    edges {\n      node {\n        ...RelatedMovie_movie\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = '219dcaecb81fb8631005694c77ae312b';
export default node;
