/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StreamingMonetizationType = "Ads" | "Buy" | "Cinema" | "Flatrate" | "Free" | "Rent" | "%future added value";
export type StreamingLink_StreamingOption = {
    readonly provider: {
        readonly iconURL: string;
    } | null;
    readonly bestOffering: {
        readonly links: {
            readonly web: string;
        };
        readonly price: {
            readonly amount: number;
            readonly currency: string;
        } | null;
        readonly type: StreamingMonetizationType;
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "type",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "StreamingOption",
  "abstractKey": null
};
(node as any).hash = '0262c50eb303d3e1112b8de6d111c8ef';
export default node;
