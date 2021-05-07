/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Cast_credits = {
    readonly cast: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"CastCredit_credit">;
    }>;
    readonly " $refType": "Cast_credits";
};
export type Cast_credits$data = Cast_credits;
export type Cast_credits$key = {
    readonly " $data"?: Cast_credits$data;
    readonly " $fragmentRefs": FragmentRefs<"Cast_credits">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Cast_credits",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CastCreditBasicPerson",
      "kind": "LinkedField",
      "name": "cast",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CastCredit_credit"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ICreditsBasicPerson",
  "abstractKey": "__isICreditsBasicPerson"
};
(node as any).hash = 'a75cec94a3c458a2e7e4c54b13ee68d9';
export default node;
