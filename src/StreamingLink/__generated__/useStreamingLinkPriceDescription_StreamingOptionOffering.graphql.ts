/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StreamingMonetizationType = "Ads" | "Buy" | "Cinema" | "Flatrate" | "Free" | "Rent" | "%future added value";
export type useStreamingLinkPriceDescription_StreamingOptionOffering = {
    readonly type: StreamingMonetizationType;
    readonly price: {
        readonly amount: number;
        readonly currency: string;
    } | null;
    readonly " $refType": "useStreamingLinkPriceDescription_StreamingOptionOffering";
};
export type useStreamingLinkPriceDescription_StreamingOptionOffering$data = useStreamingLinkPriceDescription_StreamingOptionOffering;
export type useStreamingLinkPriceDescription_StreamingOptionOffering$key = {
    readonly " $data"?: useStreamingLinkPriceDescription_StreamingOptionOffering$data;
    readonly " $fragmentRefs": FragmentRefs<"useStreamingLinkPriceDescription_StreamingOptionOffering">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useStreamingLinkPriceDescription_StreamingOptionOffering",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Price",
      "kind": "LinkedField",
      "name": "price",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "amount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "currency",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "StreamingOptionOffering",
  "abstractKey": null
};
(node as any).hash = '8dd95f8a09fbeaf873b0f71477b7a755';
export default node;
