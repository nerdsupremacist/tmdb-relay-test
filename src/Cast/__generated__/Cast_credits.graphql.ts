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
      "concreteType": "CastCreditWithPerson",
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
  "type": "CreditsWithPerson",
  "abstractKey": null
};
(node as any).hash = '88adbfedf3be79a7ce97677f9f8538be';
export default node;
