/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedPersonViewRoot_person = {
    readonly name: string;
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
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = 'e308cf5945beeee3e67f5c3c7025d7c4';
export default node;