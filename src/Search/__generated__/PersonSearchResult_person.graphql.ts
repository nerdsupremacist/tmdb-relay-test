/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PersonSearchResult_person = {
    readonly name: string;
    readonly profilePicture: string | null;
    readonly " $fragmentRefs": FragmentRefs<"PersonLinkContainer_person" | "useKnownForDescription_person">;
    readonly " $refType": "PersonSearchResult_person";
};
export type PersonSearchResult_person$data = PersonSearchResult_person;
export type PersonSearchResult_person$key = {
    readonly " $data"?: PersonSearchResult_person$data;
    readonly " $fragmentRefs": FragmentRefs<"PersonSearchResult_person">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonSearchResult_person",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "PersonLinkContainer_person"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useKnownForDescription_person"
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '0d9ada3010630636d11dc7728569bc9f';
export default node;
