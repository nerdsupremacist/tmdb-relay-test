/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ShowsOnTheAirPaginationQueryVariables = {
    count: number;
    cursor?: string | null | undefined;
};
export type ShowsOnTheAirPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ShowsOnTheAir_data">;
};
export type ShowsOnTheAirPaginationQuery = {
    readonly response: ShowsOnTheAirPaginationQueryResponse;
    readonly variables: ShowsOnTheAirPaginationQueryVariables;
};



/*
query ShowsOnTheAirPaginationQuery(
  $count: Int! = 20
  $cursor: String
) {
  ...ShowsOnTheAir_data_1G22uz
}

fragment LinkContainer_node on Node {
  __isNode: __typename
  ...routes_usePathLink_node
}

fragment ShowListItem_show on TVShow {
  ...LinkContainer_node
  name
  poster(size: W154)
}

fragment ShowsOnTheAir_data_1G22uz on Query {
  tv {
    onTheAir(first: $count, after: $cursor) {
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
  }
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
    "name": "ShowsOnTheAirPaginationQuery",
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
        "name": "ShowsOnTheAir_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShowsOnTheAirPaginationQuery",
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
            "concreteType": "TVShowConnection",
            "kind": "LinkedField",
            "name": "onTheAir",
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
            "key": "ShowsOnTheAir_data_onTheAir",
            "kind": "LinkedHandle",
            "name": "onTheAir"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4a455ae184cb3414414862e0447cf0ff",
    "id": null,
    "metadata": {},
    "name": "ShowsOnTheAirPaginationQuery",
    "operationKind": "query",
    "text": "query ShowsOnTheAirPaginationQuery(\n  $count: Int! = 20\n  $cursor: String\n) {\n  ...ShowsOnTheAir_data_1G22uz\n}\n\nfragment LinkContainer_node on Node {\n  __isNode: __typename\n  ...routes_usePathLink_node\n}\n\nfragment ShowListItem_show on TVShow {\n  ...LinkContainer_node\n  name\n  poster(size: W154)\n}\n\nfragment ShowsOnTheAir_data_1G22uz on Query {\n  tv {\n    onTheAir(first: $count, after: $cursor) {\n      edges {\n        node {\n          ...ShowListItem_show\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment routes_usePathLink_node on Node {\n  __isNode: __typename\n  ...routes_usePathLinks_nodes\n}\n\nfragment routes_usePathLinks_nodes on Node {\n  __isNode: __typename\n  __typename\n  id\n}\n"
  }
};
})();
(node as any).hash = 'b81f601e937a621e0e0f7dfb93072d15';
export default node;
