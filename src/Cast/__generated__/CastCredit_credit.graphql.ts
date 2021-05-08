/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CastCredit_credit = {
    readonly actor: {
        readonly name: string;
        readonly profilePicture: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PersonLinkContainer_person">;
    };
    readonly character: string;
    readonly " $refType": "CastCredit_credit";
};
export type CastCredit_credit$data = CastCredit_credit;
export type CastCredit_credit$key = {
    readonly " $data"?: CastCredit_credit$data;
    readonly " $fragmentRefs": FragmentRefs<"CastCredit_credit">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CastCredit_credit",
  "selections": [
    {
      "alias": "actor",
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PersonLinkContainer_person"
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
(node as any).hash = 'a67af28cdd8a48ec2734726d6aad0091';
export default node;
