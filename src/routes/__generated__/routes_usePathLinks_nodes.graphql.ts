/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type routes_usePathLinks_nodes = ReadonlyArray<{
    readonly __typename: string;
    readonly id: string;
    readonly " $refType": "routes_usePathLinks_nodes";
}>;
export type routes_usePathLinks_nodes$data = routes_usePathLinks_nodes;
export type routes_usePathLinks_nodes$key = ReadonlyArray<{
    readonly " $data"?: routes_usePathLinks_nodes$data;
    readonly " $fragmentRefs": FragmentRefs<"routes_usePathLinks_nodes">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "routes_usePathLinks_nodes",
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
(node as any).hash = 'd7b4ee33316404e94630cdcf05ef4193';
export default node;
