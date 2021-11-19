/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Cast_credits = ReadonlyArray<{
    readonly " $fragmentRefs": FragmentRefs<"CastCredit_credit">;
    readonly " $refType": "Cast_credits";
}>;
export type Cast_credits$data = Cast_credits;
export type Cast_credits$key = ReadonlyArray<{
    readonly " $data"?: Cast_credits$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Cast_credits">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Cast_credits",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CastCredit_credit"
    }
  ],
  "type": "CastCreditWithPerson",
  "abstractKey": null
};
(node as any).hash = '541d8cdd93ca8486477caaef40e8dac2';
export default node;
