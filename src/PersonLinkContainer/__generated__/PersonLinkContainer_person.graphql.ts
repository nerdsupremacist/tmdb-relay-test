/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PersonLinkContainer_person = {
    readonly personId: string;
    readonly " $refType": "PersonLinkContainer_person";
};
export type PersonLinkContainer_person$data = PersonLinkContainer_person;
export type PersonLinkContainer_person$key = {
    readonly " $data"?: PersonLinkContainer_person$data;
    readonly " $fragmentRefs": FragmentRefs<"PersonLinkContainer_person">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonLinkContainer_person",
  "selections": [
    {
      "alias": "personId",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '6ece282f86e35335b85f5bdfa35cd2bf';
export default node;
