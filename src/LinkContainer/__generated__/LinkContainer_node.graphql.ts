/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LinkContainer_node = {
    readonly " $fragmentRefs": FragmentRefs<"useNodePath_node">;
    readonly " $refType": "LinkContainer_node";
};
export type LinkContainer_node$data = LinkContainer_node;
export type LinkContainer_node$key = {
    readonly " $data"?: LinkContainer_node$data;
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
      "name": "useNodePath_node"
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
(node as any).hash = 'f4d6fab861cbd859588d69c0553925ef';
export default node;
