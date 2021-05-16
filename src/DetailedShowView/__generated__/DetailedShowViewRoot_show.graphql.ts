/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedShowViewRoot_show = {
    readonly name: string;
    readonly " $refType": "DetailedShowViewRoot_show";
};
export type DetailedShowViewRoot_show$data = DetailedShowViewRoot_show;
export type DetailedShowViewRoot_show$key = {
    readonly " $data"?: DetailedShowViewRoot_show$data;
    readonly " $fragmentRefs": FragmentRefs<"DetailedShowViewRoot_show">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailedShowViewRoot_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
(node as any).hash = '5ece28a2abd4f26af5017ca8bd322605';
export default node;
