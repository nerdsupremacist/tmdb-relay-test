/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CastCredit_CastCreditBasicPerson = {
    readonly value: {
        readonly name: string;
        readonly profilePicture: string | null;
    };
    readonly character: string;
    readonly " $refType": "CastCredit_CastCreditBasicPerson";
};
export type CastCredit_CastCreditBasicPerson$data = CastCredit_CastCreditBasicPerson;
export type CastCredit_CastCreditBasicPerson$key = {
    readonly " $data"?: CastCredit_CastCreditBasicPerson$data;
    readonly " $fragmentRefs": FragmentRefs<"CastCredit_CastCreditBasicPerson">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CastCredit_CastCreditBasicPerson",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "value",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "size",
              "value": "W185"
            }
          ],
          "kind": "ScalarField",
          "name": "profilePicture",
          "storageKey": "profilePicture(size:\"W185\")"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "character",
      "storageKey": null
    }
  ],
  "type": "CastCreditBasicPerson",
  "abstractKey": null
};
(node as any).hash = '9210a46700959b4a6e4d2cff2cd6bdbf';
export default node;
