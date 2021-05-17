/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StreamingLink_option = {
    readonly provider: {
        readonly iconURL: string;
    } | null;
    readonly bestOffering: {
        readonly links: {
            readonly web: string | null;
        };
        readonly " $fragmentRefs": FragmentRefs<"useStreamingLinkTitle_offering" | "useStreamingLinkPriceDescription_offering">;
    };
    readonly " $fragmentRefs": FragmentRefs<"StreamingLinkToolTip_option">;
    readonly " $refType": "StreamingLink_option";
};
export type StreamingLink_option$data = StreamingLink_option;
export type StreamingLink_option$key = {
    readonly " $data"?: StreamingLink_option$data;
    readonly " $fragmentRefs": FragmentRefs<"StreamingLink_option">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StreamingLink_option",
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
          "name": "useStreamingLinkTitle_offering"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "useStreamingLinkPriceDescription_offering"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StreamingLinkToolTip_option"
    }
  ],
  "type": "StreamingOption",
  "abstractKey": null
};
(node as any).hash = 'be9acea52e1ebbbf866762fa6a3fdb2c';
export default node;
