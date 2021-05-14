/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PersonHeader_person = {
    readonly name: string;
    readonly profilePicture: string | null;
    readonly knownForDepartment: string;
    readonly placeOfBirth: string | null;
    readonly " $refType": "PersonHeader_person";
};
export type PersonHeader_person$data = PersonHeader_person;
export type PersonHeader_person$key = {
    readonly " $data"?: PersonHeader_person$data;
    readonly " $fragmentRefs": FragmentRefs<"PersonHeader_person">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonHeader_person",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "knownForDepartment",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "placeOfBirth",
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '059654c56635af7452e43795097c5ed6';
export default node;
