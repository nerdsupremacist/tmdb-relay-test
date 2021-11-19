/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type StreamingMonetizationType = "Ads" | "Buy" | "Cinema" | "Flatrate" | "Free" | "Rent" | "%future added value";
export type useStreamingLinkTitle_offering = {
    readonly type: StreamingMonetizationType;
    readonly " $refType": "useStreamingLinkTitle_offering";
};
export type useStreamingLinkTitle_offering$data = useStreamingLinkTitle_offering;
export type useStreamingLinkTitle_offering$key = {
    readonly " $data"?: useStreamingLinkTitle_offering$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"useStreamingLinkTitle_offering">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useStreamingLinkTitle_offering",
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
(node as any).hash = '381132209444cf02de658778a88c728f';
export default node;
