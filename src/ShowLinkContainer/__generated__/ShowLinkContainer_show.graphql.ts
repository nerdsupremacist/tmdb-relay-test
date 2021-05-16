/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ShowLinkContainer_show = {
    readonly id: string;
    readonly " $refType": "ShowLinkContainer_show";
};
export type ShowLinkContainer_show$data = ShowLinkContainer_show;
export type ShowLinkContainer_show$key = {
    readonly " $data"?: ShowLinkContainer_show$data;
    readonly " $fragmentRefs": FragmentRefs<"ShowLinkContainer_show">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowLinkContainer_show",
  "selections": [
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
(node as any).hash = 'bf599e373b35ed0104ac449dcb154669';
export default node;
