/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedPersonViewRoot_person = {
    readonly biography: string;
    readonly " $fragmentRefs": FragmentRefs<"PersonHeader_person" | "KnownForList_person">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "KnownForList_person"
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = 'f02dc1fa7f578fdf06907188bc083d74';
export default node;
