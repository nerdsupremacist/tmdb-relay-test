/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GenreTag_Genre = {
    readonly name: string;
    readonly " $refType": "GenreTag_Genre";
};
export type GenreTag_Genre$data = GenreTag_Genre;
export type GenreTag_Genre$key = {
    readonly " $data"?: GenreTag_Genre$data;
    readonly " $fragmentRefs": FragmentRefs<"GenreTag_Genre">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GenreTag_Genre",
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
(node as any).hash = '3cb84bdcc8e0a1e215e77042cba38419';
export default node;
