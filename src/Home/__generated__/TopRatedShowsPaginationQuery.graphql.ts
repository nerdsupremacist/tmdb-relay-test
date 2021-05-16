/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TopRatedShowsPaginationQueryVariables = {
    count: number;
    cursor?: string | null;
};
export type TopRatedShowsPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TopRatedShows_data">;
};
export type TopRatedShowsPaginationQuery = {
    readonly response: TopRatedShowsPaginationQueryResponse;
    readonly variables: TopRatedShowsPaginationQueryVariables;
};



/*
query TopRatedShowsPaginationQuery(
  $count: Int! = 20
  $cursor: String
) {
  ...TopRatedShows_data_1G22uz
}

fragment ShowLinkContainer_show on TVShow {
  id
}

fragment ShowListItem_show on TVShow {
  ...ShowLinkContainer_show
  name
  poster(size: W154)
}

fragment TopRatedShows_data_1G22uz on Query {
  tv {
    topRated(first: $count, after: $cursor) {
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
    "name": "TopRatedShowsPaginationQuery",
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
        "name": "TopRatedShows_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TopRatedShowsPaginationQuery",
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
            "name": "topRated",
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
                        "name": "id",
                        "storageKey": null
                      },
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
            "filters": null,
            "handle": "connection",
            "key": "RopRatedShows_data_topRated",
            "kind": "LinkedHandle",
            "name": "topRated"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "20277cceed3cefe0667e1dc96a7068bd",
    "id": null,
    "metadata": {},
    "name": "TopRatedShowsPaginationQuery",
    "operationKind": "query",
    "text": "query TopRatedShowsPaginationQuery(\n  $count: Int! = 20\n  $cursor: String\n) {\n  ...TopRatedShows_data_1G22uz\n}\n\nfragment ShowLinkContainer_show on TVShow {\n  id\n}\n\nfragment ShowListItem_show on TVShow {\n  ...ShowLinkContainer_show\n  name\n  poster(size: W154)\n}\n\nfragment TopRatedShows_data_1G22uz on Query {\n  tv {\n    topRated(first: $count, after: $cursor) {\n      edges {\n        node {\n          ...ShowListItem_show\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e94c013e44149c0481fa0021edb1acdc';
export default node;
