/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PersonLinkContainer_person = {
    readonly id: string;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '7be7f31f0449dbfed4a4b6f8f829ab18';
export default node;
