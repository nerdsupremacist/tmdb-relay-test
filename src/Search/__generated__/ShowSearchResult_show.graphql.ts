/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ShowSearchResult_show = {
    readonly name: string;
    readonly overview: string;
    readonly poster: string | null;
    readonly " $fragmentRefs": FragmentRefs<"LinkContainer_node">;
    readonly " $refType": "ShowSearchResult_show";
};
export type ShowSearchResult_show$data = ShowSearchResult_show;
export type ShowSearchResult_show$key = {
    readonly " $data"?: ShowSearchResult_show$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ShowSearchResult_show">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowSearchResult_show",
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
      "args": null,
      "kind": "ScalarField",
      "name": "overview",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": "W185"
        }
      ],
      "kind": "ScalarField",
      "name": "poster",
      "storageKey": "poster(size:\"W185\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LinkContainer_node"
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
(node as any).hash = '64539c3d0b1da28a19be905d9c6b7d17';
export default node;
