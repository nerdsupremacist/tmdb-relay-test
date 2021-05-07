/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieLinkContainer_movie = {
    readonly movieId: number;
    readonly " $refType": "MovieLinkContainer_movie";
};
export type MovieLinkContainer_movie$data = MovieLinkContainer_movie;
export type MovieLinkContainer_movie$key = {
    readonly " $data"?: MovieLinkContainer_movie$data;
    readonly " $fragmentRefs": FragmentRefs<"MovieLinkContainer_movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieLinkContainer_movie",
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
(node as any).hash = 'e6916ed1092755f1c13d5645a467bcb2';
export default node;
