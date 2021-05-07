/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GenreTag_genre = {
    readonly name: string;
    readonly " $refType": "GenreTag_genre";
};
export type GenreTag_genre$data = GenreTag_genre;
export type GenreTag_genre$key = {
    readonly " $data"?: GenreTag_genre$data;
    readonly " $fragmentRefs": FragmentRefs<"GenreTag_genre">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GenreTag_genre",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Genre",
  "abstractKey": null
};
(node as any).hash = '775abfdb432ce946c9690764baa2e0b3';
export default node;
