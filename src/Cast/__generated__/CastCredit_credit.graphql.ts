/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CastCredit_credit = {
    readonly actor: {
        readonly name: string;
        readonly profilePicture: string | null;
        readonly " $fragmentRefs": FragmentRefs<"LinkContainer_node">;
    };
    readonly character: string;
    readonly " $refType": "CastCredit_credit";
};
export type CastCredit_credit$data = CastCredit_credit;
export type CastCredit_credit$key = {
    readonly " $data"?: CastCredit_credit$data | undefined;
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
      "concreteType": "Person",
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
          "name": "LinkContainer_node"
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
  "type": "CastCreditWithPerson",
  "abstractKey": null
};
(node as any).hash = '3c773db5eab700e956208a2f2dbd3690';
export default node;
