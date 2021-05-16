/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type KnownForList_person = {
    readonly knownFor: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"MovieOrShowResult_result">;
    }>;
    readonly " $refType": "KnownForList_person";
};
export type KnownForList_person$data = KnownForList_person;
export type KnownForList_person$key = {
    readonly " $data"?: KnownForList_person$data;
    readonly " $fragmentRefs": FragmentRefs<"KnownForList_person">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "KnownForList_person",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "knownFor",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MovieOrShowResult_result"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '088de2a799ef98e1be316638efc9b916';
export default node;
