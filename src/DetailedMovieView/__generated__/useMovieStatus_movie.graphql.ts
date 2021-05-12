/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Status = "Cancelled" | "InProduction" | "Planned" | "PostProduction" | "Released" | "Rumored" | "%future added value";
export type useMovieStatus_movie = {
    readonly status: Status;
    readonly " $refType": "useMovieStatus_movie";
};
export type useMovieStatus_movie$data = useMovieStatus_movie;
export type useMovieStatus_movie$key = {
    readonly " $data"?: useMovieStatus_movie$data;
    readonly " $fragmentRefs": FragmentRefs<"useMovieStatus_movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useMovieStatus_movie",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = '203d64a958f7cab7ed95f6147fbfde3c';
export default node;
