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
    readonly homepage: string | null;
    readonly externalIds: {
        readonly imdb: string | null;
        readonly facebook: string | null;
        readonly instagram: string | null;
        readonly twitter: string | null;
    };
    readonly " $refType": "PersonHeader_person";
};
export type PersonHeader_person$data = PersonHeader_person;
export type PersonHeader_person$key = {
    readonly " $data"?: PersonHeader_person$data | undefined;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "homepage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FullExternalIDS",
      "kind": "LinkedField",
      "name": "externalIds",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "imdb",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "facebook",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "instagram",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "twitter",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '4b079a1176b889c2236c833379f0449c';
export default node;
