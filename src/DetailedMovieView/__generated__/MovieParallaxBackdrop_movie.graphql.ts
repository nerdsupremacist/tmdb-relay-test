/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieParallaxBackdrop_movie = {
    readonly backdrop: string | null;
    readonly " $refType": "MovieParallaxBackdrop_movie";
};
export type MovieParallaxBackdrop_movie$data = MovieParallaxBackdrop_movie;
export type MovieParallaxBackdrop_movie$key = {
    readonly " $data"?: MovieParallaxBackdrop_movie$data;
    readonly " $fragmentRefs": FragmentRefs<"MovieParallaxBackdrop_movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieParallaxBackdrop_movie",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": "Original"
        }
      ],
      "kind": "ScalarField",
      "name": "backdrop",
      "storageKey": "backdrop(size:\"Original\")"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = '1822d47e870132dc583139dedc890118';
export default node;
