/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedPersonViewRoot_person = {
    readonly biography: string;
    readonly " $fragmentRefs": FragmentRefs<"PersonHeader_person">;
    readonly " $refType": "DetailedPersonViewRoot_person";
};
export type DetailedPersonViewRoot_person$data = DetailedPersonViewRoot_person;
export type DetailedPersonViewRoot_person$key = {
    readonly " $data"?: DetailedPersonViewRoot_person$data;
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
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '1b63a2e7b49203856e951e3649476647';
export default node;
