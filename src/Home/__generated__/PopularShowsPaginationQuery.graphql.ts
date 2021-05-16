/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PopularShowsPaginationQueryVariables = {
    count: number;
    cursor?: string | null;
};
export type PopularShowsPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"PopularShows_data">;
};
export type PopularShowsPaginationQuery = {
    readonly response: PopularShowsPaginationQueryResponse;
    readonly variables: PopularShowsPaginationQueryVariables;
};



/*
query PopularShowsPaginationQuery(
  $count: Int! = 20
  $cursor: String
) {
  ...PopularShows_data_1G22uz
}

fragment PopularShows_data_1G22uz on Query {
  tv {
    popular(first: $count, after: $cursor) {
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

fragment ShowLinkContainer_show on TVShow {
  id
}

fragment ShowListItem_show on TVShow {
  ...ShowLinkContainer_show
  name
  poster(size: W154)
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
    "name": "PopularShowsPaginationQuery",
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
        "name": "PopularShows_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PopularShowsPaginationQuery",
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
            "name": "popular",
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
            "key": "PopularShows_data_popular",
            "kind": "LinkedHandle",
            "name": "popular"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6bfb69cfb648d48b56369423e4d23c4a",
    "id": null,
    "metadata": {},
    "name": "PopularShowsPaginationQuery",
    "operationKind": "query",
    "text": "query PopularShowsPaginationQuery(\n  $count: Int! = 20\n  $cursor: String\n) {\n  ...PopularShows_data_1G22uz\n}\n\nfragment PopularShows_data_1G22uz on Query {\n  tv {\n    popular(first: $count, after: $cursor) {\n      edges {\n        node {\n          ...ShowListItem_show\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment ShowLinkContainer_show on TVShow {\n  id\n}\n\nfragment ShowListItem_show on TVShow {\n  ...ShowLinkContainer_show\n  name\n  poster(size: W154)\n}\n"
  }
};
})();
(node as any).hash = '6811127947be5406a7b63da40a5f3abd';
export default node;
