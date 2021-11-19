/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import TopRatedShowsPaginationQuery from "./TopRatedShowsPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type TopRatedShows_data = {
    readonly tv: {
        readonly topRated: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly " $fragmentRefs": FragmentRefs<"ShowListItem_show">;
                } | null;
            } | null> | null;
        };
    };
    readonly " $refType": "TopRatedShows_data";
};
export type TopRatedShows_data$data = TopRatedShows_data;
export type TopRatedShows_data$key = {
    readonly " $data"?: TopRatedShows_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TopRatedShows_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "tv",
  "topRated"
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
      "operation": TopRatedShowsPaginationQuery
    }
  },
  "name": "TopRatedShows_data",
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
          "alias": "topRated",
          "args": null,
          "concreteType": "TVShowConnection",
          "kind": "LinkedField",
          "name": "__RopRatedShows_data_topRated_connection",
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
(node as any).hash = 'e94c013e44149c0481fa0021edb1acdc';
export default node;
