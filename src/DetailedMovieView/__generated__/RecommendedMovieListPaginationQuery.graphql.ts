/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RecommendedMovieListPaginationQueryVariables = {
    count: number;
    cursor?: string | null | undefined;
    id: string;
};
export type RecommendedMovieListPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"RecommendedMovieList_movie">;
    } | null;
};
export type RecommendedMovieListPaginationQuery = {
    readonly response: RecommendedMovieListPaginationQueryResponse;
    readonly variables: RecommendedMovieListPaginationQueryVariables;
};



/*
query RecommendedMovieListPaginationQuery(
  $count: Int! = 20
  $cursor: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...RecommendedMovieList_movie_1G22uz
    id
  }
}

fragment LinkContainer_node on Node {
  __isNode: __typename
  ...routes_usePathLink_node
}

fragment MovieListItem_movie on Movie {
  ...LinkContainer_node
  title
  poster(size: W154)
}

fragment RecommendedMovieList_movie_1G22uz on Movie {
  recommendations(first: $count, after: $cursor) {
    totalCount
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
  id
}

fragment routes_usePathLink_node on Node {
  __isNode: __typename
  ...routes_usePathLinks_nodes
}

fragment routes_usePathLinks_nodes on Node {
  __isNode: __typename
  __typename
  id
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
    "name": "RecommendedMovieListPaginationQuery",
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
            "name": "RecommendedMovieList_movie"
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
    "name": "RecommendedMovieListPaginationQuery",
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
                "name": "recommendations",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  },
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
                          (v3/*: any*/),
                          (v2/*: any*/),
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
                "args": (v4/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "RecommendedMovieList_recommendations",
                "kind": "LinkedHandle",
                "name": "recommendations"
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
    "cacheID": "fc9203c012cf7725efc3711375b83910",
    "id": null,
    "metadata": {},
    "name": "RecommendedMovieListPaginationQuery",
    "operationKind": "query",
    "text": "query RecommendedMovieListPaginationQuery(\n  $count: Int! = 20\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...RecommendedMovieList_movie_1G22uz\n    id\n  }\n}\n\nfragment LinkContainer_node on Node {\n  __isNode: __typename\n  ...routes_usePathLink_node\n}\n\nfragment MovieListItem_movie on Movie {\n  ...LinkContainer_node\n  title\n  poster(size: W154)\n}\n\nfragment RecommendedMovieList_movie_1G22uz on Movie {\n  recommendations(first: $count, after: $cursor) {\n    totalCount\n    edges {\n      node {\n        ...MovieListItem_movie\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment routes_usePathLink_node on Node {\n  __isNode: __typename\n  ...routes_usePathLinks_nodes\n}\n\nfragment routes_usePathLinks_nodes on Node {\n  __isNode: __typename\n  __typename\n  id\n}\n"
  }
};
})();
(node as any).hash = 'fc399d78c0ccb96658a325ed4a2f6f85';
export default node;
