/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StreamingLinks_links = ReadonlyArray<{
    readonly provider: {
        readonly __typename: string;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"StreamingLink_option">;
    readonly " $refType": "StreamingLinks_links";
}>;
export type StreamingLinks_links$data = StreamingLinks_links;
export type StreamingLinks_links$key = ReadonlyArray<{
    readonly " $data"?: StreamingLinks_links$data;
    readonly " $fragmentRefs": FragmentRefs<"StreamingLinks_links">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "StreamingLinks_links",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "StreamingProvider",
      "kind": "LinkedField",
      "name": "provider",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StreamingLink_option"
    }
  ],
  "type": "StreamingOption",
  "abstractKey": null
};
(node as any).hash = '7ac1e718eaeaa12158610b3fc481ff39';
export default node;
