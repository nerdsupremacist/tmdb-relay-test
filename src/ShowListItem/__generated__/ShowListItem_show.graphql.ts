/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ShowListItem_show = {
    readonly name: string;
    readonly poster: string | null;
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
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
(node as any).hash = '6829a43be7d4218047ad5f672bf4725d';
export default node;
