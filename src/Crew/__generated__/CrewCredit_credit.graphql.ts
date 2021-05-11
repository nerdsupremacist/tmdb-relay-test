/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CrewCredit_credit = {
    readonly actor: {
        readonly name: string;
        readonly profilePicture: string | null;
        readonly " $fragmentRefs": FragmentRefs<"PersonLinkContainer_person">;
    };
    readonly job: string;
    readonly " $refType": "CrewCredit_credit";
};
export type CrewCredit_credit$data = CrewCredit_credit;
export type CrewCredit_credit$key = {
    readonly " $data"?: CrewCredit_credit$data;
    readonly " $fragmentRefs": FragmentRefs<"CrewCredit_credit">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CrewCredit_credit",
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
          "name": "PersonLinkContainer_person"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "job",
      "storageKey": null
    }
  ],
  "type": "CrewCreditWithPerson",
  "abstractKey": null
};
(node as any).hash = 'c67b59fc50a16235564c64971e0a29f2';
export default node;
