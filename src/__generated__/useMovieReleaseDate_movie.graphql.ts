/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useMovieReleaseDate_movie = {
    readonly releaseDate: string | null;
    readonly " $refType": "useMovieReleaseDate_movie";
};
export type useMovieReleaseDate_movie$data = useMovieReleaseDate_movie;
export type useMovieReleaseDate_movie$key = {
    readonly " $data"?: useMovieReleaseDate_movie$data;
    readonly " $fragmentRefs": FragmentRefs<"useMovieReleaseDate_movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useMovieReleaseDate_movie",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "releaseDate",
      "storageKey": null
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
(node as any).hash = '52fe27922e2d7b5c0258f574df721acc';
export default node;
