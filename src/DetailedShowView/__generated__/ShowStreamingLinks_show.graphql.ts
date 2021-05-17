/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ShowStreamingLinks_show = {
    readonly streamingOptions: ReadonlyArray<{
        readonly provider: {
            readonly __typename: string;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"StreamingLink_option">;
    }> | null;
    readonly " $refType": "ShowStreamingLinks_show";
};
export type ShowStreamingLinks_show$data = ShowStreamingLinks_show;
export type ShowStreamingLinks_show$key = {
    readonly " $data"?: ShowStreamingLinks_show$data;
    readonly " $fragmentRefs": FragmentRefs<"ShowStreamingLinks_show">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowStreamingLinks_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "StreamingOption",
      "kind": "LinkedField",
      "name": "streamingOptions",
      "plural": true,
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
      "storageKey": null
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
(node as any).hash = '88bbad03352b1772ff0bccc693591e42';
export default node;
