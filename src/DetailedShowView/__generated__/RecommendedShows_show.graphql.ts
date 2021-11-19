/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import RecommendedShowsPaginationQuery from "./RecommendedShowsPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type RecommendedShows_show = {
    readonly recommendations: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"ShowListItem_show">;
            } | null;
        } | null> | null;
    };
    readonly id: string;
    readonly " $refType": "RecommendedShows_show";
};
export type RecommendedShows_show$data = RecommendedShows_show;
export type RecommendedShows_show$key = {
    readonly " $data"?: RecommendedShows_show$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RecommendedShows_show">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "recommendations"
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
      "fragmentPathInResult": [
        "node"
      ],
      "operation": RecommendedShowsPaginationQuery,
      "identifierField": "id"
    }
  },
  "name": "RecommendedShows_show",
  "selections": [
    {
      "alias": "recommendations",
      "args": null,
      "concreteType": "TVShowConnection",
      "kind": "LinkedField",
      "name": "__RecommendedShows_show_recommendations_connection",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
})();
(node as any).hash = 'eaf87060389684cd83e4d0d210ec0169';
export default node;
