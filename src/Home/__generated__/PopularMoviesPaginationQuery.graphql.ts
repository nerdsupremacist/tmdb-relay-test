/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PopularMoviesPaginationQueryVariables = {
    count: number;
    cursor?: string | null;
};
export type PopularMoviesPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"PopularMovies_data">;
};
export type PopularMoviesPaginationQuery = {
    readonly response: PopularMoviesPaginationQueryResponse;
    readonly variables: PopularMoviesPaginationQueryVariables;
};



/*
query PopularMoviesPaginationQuery(
  $count: Int! = 20
  $cursor: String
) {
  ...PopularMovies_data_1G22uz
}

fragment LinkContainer_node on Node {
  __isNode: __typename
  ...useNodePath_node
}

fragment MovieListItem_movie on Movie {
  ...LinkContainer_node
  title
  poster(size: W154)
}

fragment PopularMovies_data_1G22uz on Query {
  movies {
    popular(first: $count, after: $cursor) {
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

fragment useNodePath_node on Node {
  __isNode: __typename
  __typename
  id
  ... on Movie {
    __typename
  }
  ... on TVShow {
    __typename
  }
  ... on Episode {
    __typename
  }
  ... on Person {
    __typename
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
    "name": "PopularMoviesPaginationQuery",
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
        "name": "PopularMovies_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PopularMoviesPaginationQuery",
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
            "name": "popular",
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
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      {
                        "kind": "TypeDiscriminator",
                        "abstractKey": "__isNode"
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
            "filters": null,
            "handle": "connection",
            "key": "PopularMovies_data_movies_popular",
            "kind": "LinkedHandle",
            "name": "popular"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d1096cf3aca4040363dae463e6111b97",
    "id": null,
    "metadata": {},
    "name": "PopularMoviesPaginationQuery",
    "operationKind": "query",
    "text": "query PopularMoviesPaginationQuery(\n  $count: Int! = 20\n  $cursor: String\n) {\n  ...PopularMovies_data_1G22uz\n}\n\nfragment LinkContainer_node on Node {\n  __isNode: __typename\n  ...useNodePath_node\n}\n\nfragment MovieListItem_movie on Movie {\n  ...LinkContainer_node\n  title\n  poster(size: W154)\n}\n\nfragment PopularMovies_data_1G22uz on Query {\n  movies {\n    popular(first: $count, after: $cursor) {\n      edges {\n        node {\n          ...MovieListItem_movie\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment useNodePath_node on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Movie {\n    __typename\n  }\n  ... on TVShow {\n    __typename\n  }\n  ... on Episode {\n    __typename\n  }\n  ... on Person {\n    __typename\n  }\n}\n"
  }
};
})();
(node as any).hash = '7992e734463eac820a2a57ad3d847f97';
export default node;
