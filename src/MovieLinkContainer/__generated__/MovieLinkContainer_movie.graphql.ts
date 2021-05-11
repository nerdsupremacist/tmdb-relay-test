/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieLinkContainer_movie = {
    readonly id: string;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = '230e05f5797c78372d9f9eb2a5cd0e0c';
export default node;
