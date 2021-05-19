/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useNodePathLinks_nodes = ReadonlyArray<{
    readonly __typename: string;
    readonly id: string;
    readonly " $refType": "useNodePathLinks_nodes";
}>;
export type useNodePathLinks_nodes$data = useNodePathLinks_nodes;
export type useNodePathLinks_nodes$key = ReadonlyArray<{
    readonly " $data"?: useNodePathLinks_nodes$data;
    readonly " $fragmentRefs": FragmentRefs<"useNodePathLinks_nodes">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "useNodePathLinks_nodes",
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
(node as any).hash = 'eaa231d0cc041406db56932c759f41f2';
export default node;
