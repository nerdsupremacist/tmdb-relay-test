/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type StreamingLinkToolTip_option = {
    readonly provider: {
        readonly name: string;
    } | null;
    readonly " $refType": "StreamingLinkToolTip_option";
};
export type StreamingLinkToolTip_option$data = StreamingLinkToolTip_option;
export type StreamingLinkToolTip_option$key = {
    readonly " $data"?: StreamingLinkToolTip_option$data;
    readonly " $fragmentRefs": FragmentRefs<"StreamingLinkToolTip_option">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StreamingLinkToolTip_option",
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
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "StreamingOption",
  "abstractKey": null
};
(node as any).hash = '2a825b170068cfd9ca013ab09df707ba';
export default node;
