/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DetailedPersonViewRoot_person = {
    readonly biography: string;
    readonly " $fragmentRefs": FragmentRefs<"PersonHeader_person" | "KnownForList_person" | "AdditionalCredits_person">;
    readonly " $refType": "DetailedPersonViewRoot_person";
};
export type DetailedPersonViewRoot_person$data = DetailedPersonViewRoot_person;
export type DetailedPersonViewRoot_person$key = {
    readonly " $data"?: DetailedPersonViewRoot_person$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"DetailedPersonViewRoot_person">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailedPersonViewRoot_person",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "biography",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PersonHeader_person"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "KnownForList_person"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AdditionalCredits_person"
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '37d092cf1b7af2c51b82926d16e527f9';
export default node;
