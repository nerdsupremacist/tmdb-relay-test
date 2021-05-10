/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieLinkContainer_movie = {
    readonly movieId: string;
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
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = '128477e3620a3242008fe0647ca057e4';
export default node;
