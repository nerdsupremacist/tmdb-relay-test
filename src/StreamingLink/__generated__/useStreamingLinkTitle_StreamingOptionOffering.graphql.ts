/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StreamingMonetizationType = "Ads" | "Buy" | "Cinema" | "Flatrate" | "Free" | "Rent" | "%future added value";
export type useStreamingLinkTitle_StreamingOptionOffering = {
    readonly type: StreamingMonetizationType;
    readonly " $refType": "useStreamingLinkTitle_StreamingOptionOffering";
};
export type useStreamingLinkTitle_StreamingOptionOffering$data = useStreamingLinkTitle_StreamingOptionOffering;
export type useStreamingLinkTitle_StreamingOptionOffering$key = {
    readonly " $data"?: useStreamingLinkTitle_StreamingOptionOffering$data;
    readonly " $fragmentRefs": FragmentRefs<"useStreamingLinkTitle_StreamingOptionOffering">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useStreamingLinkTitle_StreamingOptionOffering",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    }
  ],
  "type": "StreamingOptionOffering",
  "abstractKey": null
};
(node as any).hash = '63f907c2d575b43b97438ecf1b01d5a3';
export default node;
