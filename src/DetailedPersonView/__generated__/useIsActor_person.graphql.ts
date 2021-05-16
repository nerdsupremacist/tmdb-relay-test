/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useIsActor_person = {
    readonly knownForDepartment: string;
    readonly " $refType": "useIsActor_person";
};
export type useIsActor_person$data = useIsActor_person;
export type useIsActor_person$key = {
    readonly " $data"?: useIsActor_person$data;
    readonly " $fragmentRefs": FragmentRefs<"useIsActor_person">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useIsActor_person",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "knownForDepartment",
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '6a34c0f0ae6723b7bcb8f428f0fb9a55';
export default node;
