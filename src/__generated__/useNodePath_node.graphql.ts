/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useNodePath_node = {
    readonly __typename: string;
    readonly id: string;
    readonly " $refType": "useNodePath_node";
};
export type useNodePath_node$data = useNodePath_node;
export type useNodePath_node$key = {
    readonly " $data"?: useNodePath_node$data;
    readonly " $fragmentRefs": FragmentRefs<"useNodePath_node">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useNodePath_node",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
(node as any).hash = '26acf5baa6f2e11bb93575bde4ff6281';
export default node;
