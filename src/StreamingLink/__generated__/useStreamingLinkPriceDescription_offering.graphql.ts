/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type StreamingMonetizationType = "Ads" | "Buy" | "Cinema" | "Flatrate" | "Free" | "Rent" | "%future added value";
export type useStreamingLinkPriceDescription_offering = {
    readonly type: StreamingMonetizationType;
    readonly price: {
        readonly amount: number;
        readonly currency: string;
    } | null;
    readonly " $refType": "useStreamingLinkPriceDescription_offering";
};
export type useStreamingLinkPriceDescription_offering$data = useStreamingLinkPriceDescription_offering;
export type useStreamingLinkPriceDescription_offering$key = {
    readonly " $data"?: useStreamingLinkPriceDescription_offering$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"useStreamingLinkPriceDescription_offering">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useStreamingLinkPriceDescription_offering",
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
(node as any).hash = 'dde7959719a311b78f864e3b48ea08b6';
export default node;
