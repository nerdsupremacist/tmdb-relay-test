/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SimilarShowsPaginationQueryVariables = {
    count: number;
    cursor?: string | null;
    id: string;
};
export type SimilarShowsPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"SimilarShows_show">;
    } | null;
};
export type SimilarShowsPaginationQuery = {
    readonly response: SimilarShowsPaginationQueryResponse;
    readonly variables: SimilarShowsPaginationQueryVariables;
};



/*
query SimilarShowsPaginationQuery(
  $count: Int! = 20
  $cursor: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...SimilarShows_show_1G22uz
    id
  }
}

fragment ShowLinkContainer_show on TVShow {
  id
}

fragment ShowListItem_show on TVShow {
  ...ShowLinkContainer_show
  name
  poster(size: W154)
}

fragment SimilarShows_show_1G22uz on TVShow {
  similar(first: $count, after: $cursor) {
    edges {
      node {
        ...ShowListItem_show
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
    "name": "SimilarShowsPaginationQuery",
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
            "name": "SimilarShows_show"
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
    "name": "SimilarShowsPaginationQuery",
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
                "concreteType": "TVShowConnection",
                "kind": "LinkedField",
                "name": "similar",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TVShowEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TVShow",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
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
                "key": "SimilarShows_show_similar",
                "kind": "LinkedHandle",
                "name": "similar"
              }
            ],
            "type": "TVShow",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "52ba96b41f7305973fbede1160f90cf3",
    "id": null,
    "metadata": {},
    "name": "SimilarShowsPaginationQuery",
    "operationKind": "query",
    "text": "query SimilarShowsPaginationQuery(\n  $count: Int! = 20\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...SimilarShows_show_1G22uz\n    id\n  }\n}\n\nfragment ShowLinkContainer_show on TVShow {\n  id\n}\n\nfragment ShowListItem_show on TVShow {\n  ...ShowLinkContainer_show\n  name\n  poster(size: W154)\n}\n\nfragment SimilarShows_show_1G22uz on TVShow {\n  similar(first: $count, after: $cursor) {\n    edges {\n      node {\n        ...ShowListItem_show\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = '544b6a9c15b081528de0e89622c09059';
export default node;
