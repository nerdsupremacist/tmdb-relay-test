/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import ShowsOnTheAirPaginationQuery from "./ShowsOnTheAirPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type ShowsOnTheAir_data = {
    readonly tv: {
        readonly onTheAir: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly " $fragmentRefs": FragmentRefs<"ShowListItem_show">;
                } | null;
            } | null> | null;
        };
    };
    readonly " $refType": "ShowsOnTheAir_data";
};
export type ShowsOnTheAir_data$data = ShowsOnTheAir_data;
export type ShowsOnTheAir_data$key = {
    readonly " $data"?: ShowsOnTheAir_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ShowsOnTheAir_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "tv",
  "onTheAir"
];
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": ShowsOnTheAirPaginationQuery
    }
  },
  "name": "ShowsOnTheAir_data",
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
          "alias": "onTheAir",
          "args": null,
          "concreteType": "TVShowConnection",
          "kind": "LinkedField",
          "name": "__ShowsOnTheAir_data_onTheAir_connection",
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
                      "name": "__typename",
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ShowListItem_show"
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = 'b81f601e937a621e0e0f7dfb93072d15';
export default node;
