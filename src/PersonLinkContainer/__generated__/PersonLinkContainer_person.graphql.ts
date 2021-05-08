/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PersonLinkContainer_person = {
    readonly personId: number;
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
  "type": "IBasicPerson",
  "abstractKey": "__isIBasicPerson"
};
(node as any).hash = '738725c44a3b2c4583d24f0e646968f7';
export default node;
