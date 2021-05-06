/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieLinkContainer_IMovie = {
    readonly movieId: number;
    readonly " $refType": "MovieLinkContainer_IMovie";
};
export type MovieLinkContainer_IMovie$data = MovieLinkContainer_IMovie;
export type MovieLinkContainer_IMovie$key = {
    readonly " $data"?: MovieLinkContainer_IMovie$data;
    readonly " $fragmentRefs": FragmentRefs<"MovieLinkContainer_IMovie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieLinkContainer_IMovie",
  "selections": [
    {
      "alias": "movieId",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
(node as any).hash = 'bad9e7e2f9c44ba2a6d65ec1b7bc39eb';
export default node;
