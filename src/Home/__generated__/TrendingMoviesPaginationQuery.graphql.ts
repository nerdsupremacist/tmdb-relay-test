/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TrendingMoviesPaginationQueryVariables = {
    count: number;
    cursor?: string | null;
};
export type TrendingMoviesPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TrendingMovies_data">;
};
export type TrendingMoviesPaginationQuery = {
    readonly response: TrendingMoviesPaginationQueryResponse;
    readonly variables: TrendingMoviesPaginationQueryVariables;
};



/*
query TrendingMoviesPaginationQuery(
  $count: Int! = 20
  $cursor: String
) {
  ...TrendingMovies_data_1G22uz
}

fragment MovieLinkContainer_movie on Movie {
  id
}

fragment MovieListItem_movie on Movie {
  ...MovieLinkContainer_movie
  title
  poster(size: W154)
}

fragment TrendingMovies_data_1G22uz on Query {
  movies {
    trending(first: $count, after: $cursor) {
      edges {
        node {
          ...MovieListItem_movie
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
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": 20,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
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
    "name": "TrendingMoviesPaginationQuery",
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
        "name": "TrendingMovies_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TrendingMoviesPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Movies",
        "kind": "LinkedField",
        "name": "movies",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "MovieConnection",
            "kind": "LinkedField",
            "name": "trending",
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
                        "storageKey": null
                      },
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
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
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
            "args": (v1/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "TrendingMovies_trending",
            "kind": "LinkedHandle",
            "name": "trending"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6944731ca0f0faae474f78c517ff673c",
    "id": null,
    "metadata": {},
    "name": "TrendingMoviesPaginationQuery",
    "operationKind": "query",
    "text": "query TrendingMoviesPaginationQuery(\n  $count: Int! = 20\n  $cursor: String\n) {\n  ...TrendingMovies_data_1G22uz\n}\n\nfragment MovieLinkContainer_movie on Movie {\n  id\n}\n\nfragment MovieListItem_movie on Movie {\n  ...MovieLinkContainer_movie\n  title\n  poster(size: W154)\n}\n\nfragment TrendingMovies_data_1G22uz on Query {\n  movies {\n    trending(first: $count, after: $cursor) {\n      edges {\n        node {\n          ...MovieListItem_movie\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4fd1ea4c2d05f4ef3499dfce63ca5aed';
export default node;
