/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ShowListItem_show = {
    readonly name: string;
    readonly poster: string | null;
    readonly " $fragmentRefs": FragmentRefs<"ShowLinkContainer_show">;
    readonly " $refType": "ShowListItem_show";
};
export type ShowListItem_show$data = ShowListItem_show;
export type ShowListItem_show$key = {
    readonly " $data"?: ShowListItem_show$data;
    readonly " $fragmentRefs": FragmentRefs<"ShowListItem_show">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowListItem_show",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowLinkContainer_show"
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
(node as any).hash = '3e64b093646aa11ee0255627651a0427';
export default node;
