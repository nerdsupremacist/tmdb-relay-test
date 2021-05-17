/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useShowAirDate_show = {
    readonly firstAirDate: string | null;
    readonly " $refType": "useShowAirDate_show";
};
export type useShowAirDate_show$data = useShowAirDate_show;
export type useShowAirDate_show$key = {
    readonly " $data"?: useShowAirDate_show$data;
    readonly " $fragmentRefs": FragmentRefs<"useShowAirDate_show">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useShowAirDate_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstAirDate",
      "storageKey": null
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
(node as any).hash = '9d7dc10e66757d2143819505e177ea8a';
export default node;
