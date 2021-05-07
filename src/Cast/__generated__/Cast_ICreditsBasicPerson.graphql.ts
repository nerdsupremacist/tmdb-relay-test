/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Cast_ICreditsBasicPerson = {
    readonly cast: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"CastCredit_CastCreditBasicPerson">;
    }>;
    readonly " $refType": "Cast_ICreditsBasicPerson";
};
export type Cast_ICreditsBasicPerson$data = Cast_ICreditsBasicPerson;
export type Cast_ICreditsBasicPerson$key = {
    readonly " $data"?: Cast_ICreditsBasicPerson$data;
    readonly " $fragmentRefs": FragmentRefs<"Cast_ICreditsBasicPerson">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Cast_ICreditsBasicPerson",
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
          "name": "CastCredit_CastCreditBasicPerson"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ICreditsBasicPerson",
  "abstractKey": "__isICreditsBasicPerson"
};
(node as any).hash = '9c8bce7a6eef465f70acea15934eb82f';
export default node;
