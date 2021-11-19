/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ShowParallaxBackdrop_show = {
    readonly backdrop: string | null;
    readonly " $refType": "ShowParallaxBackdrop_show";
};
export type ShowParallaxBackdrop_show$data = ShowParallaxBackdrop_show;
export type ShowParallaxBackdrop_show$key = {
    readonly " $data"?: ShowParallaxBackdrop_show$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ShowParallaxBackdrop_show">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowParallaxBackdrop_show",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": "Original"
        }
      ],
      "kind": "ScalarField",
      "name": "backdrop",
      "storageKey": "backdrop(size:\"Original\")"
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
(node as any).hash = 'f7bc5489bd15a1e570ee956f98150c38';
export default node;
