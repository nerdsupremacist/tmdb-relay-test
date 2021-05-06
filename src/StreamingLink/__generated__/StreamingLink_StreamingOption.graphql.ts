/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StreamingLink_StreamingOption = {
    readonly provider: {
        readonly iconURL: string;
    } | null;
    readonly bestOffering: {
        readonly links: {
            readonly web: string;
        };
        readonly " $fragmentRefs": FragmentRefs<"useStreamingLinkTitle_StreamingOptionOffering" | "useStreamingLinkPriceDescription_StreamingOptionOffering">;
    };
    readonly " $refType": "StreamingLink_StreamingOption";
};
export type StreamingLink_StreamingOption$data = StreamingLink_StreamingOption;
export type StreamingLink_StreamingOption$key = {
    readonly " $data"?: StreamingLink_StreamingOption$data;
    readonly " $fragmentRefs": FragmentRefs<"StreamingLink_StreamingOption">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StreamingLink_StreamingOption",
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
          "name": "iconURL",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "StreamingOptionOffering",
      "kind": "LinkedField",
      "name": "bestOffering",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "StreamingLinks",
          "kind": "LinkedField",
          "name": "links",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "web",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "useStreamingLinkTitle_StreamingOptionOffering"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "useStreamingLinkPriceDescription_StreamingOptionOffering"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "StreamingOption",
  "abstractKey": null
};
(node as any).hash = 'd3111a15722e378a4a5535957add8116';
export default node;