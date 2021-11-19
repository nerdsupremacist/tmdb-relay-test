/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type routes_usePathLink_node = {
    readonly " $fragmentRefs": FragmentRefs<"routes_usePathLinks_nodes">;
    readonly " $refType": "routes_usePathLink_node";
};
export type routes_usePathLink_node$data = routes_usePathLink_node;
export type routes_usePathLink_node$key = {
    readonly " $data"?: routes_usePathLink_node$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"routes_usePathLink_node">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "routes_usePathLink_node",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "routes_usePathLinks_nodes"
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
(node as any).hash = '0e9fbe5109c6a17b6234fb06546f4965';
export default node;
