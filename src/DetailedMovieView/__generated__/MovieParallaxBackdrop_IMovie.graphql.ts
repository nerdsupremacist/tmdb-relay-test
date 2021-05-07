/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieParallaxBackdrop_IMovie = {
    readonly backdrop: string | null;
    readonly " $refType": "MovieParallaxBackdrop_IMovie";
};
export type MovieParallaxBackdrop_IMovie$data = MovieParallaxBackdrop_IMovie;
export type MovieParallaxBackdrop_IMovie$key = {
    readonly " $data"?: MovieParallaxBackdrop_IMovie$data;
    readonly " $fragmentRefs": FragmentRefs<"MovieParallaxBackdrop_IMovie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieParallaxBackdrop_IMovie",
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
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
(node as any).hash = 'ed943291329ca4d5bbc73ac0d8b484b6';
export default node;
