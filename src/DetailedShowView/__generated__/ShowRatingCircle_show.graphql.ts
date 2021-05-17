/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ShowRatingCircle_show = {
    readonly status: string;
    readonly rating: number;
    readonly numberOfRatings: number;
    readonly " $refType": "ShowRatingCircle_show";
};
export type ShowRatingCircle_show$data = ShowRatingCircle_show;
export type ShowRatingCircle_show$key = {
    readonly " $data"?: ShowRatingCircle_show$data;
    readonly " $fragmentRefs": FragmentRefs<"ShowRatingCircle_show">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowRatingCircle_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rating",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "numberOfRatings",
      "storageKey": null
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
(node as any).hash = '465890218386fc5c58a4bd564139237a';
export default node;
