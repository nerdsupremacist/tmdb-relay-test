/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type LinkContainer_node = {
    readonly " $fragmentRefs": FragmentRefs<"routes_usePathLink_node">;
    readonly " $refType": "LinkContainer_node";
};
export type LinkContainer_node$data = LinkContainer_node;
export type LinkContainer_node$key = {
    readonly " $data"?: LinkContainer_node$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"LinkContainer_node">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinkContainer_node",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "routes_usePathLink_node"
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
(node as any).hash = '1764f01b8b89556c22ff75e25187a32c';
export default node;
