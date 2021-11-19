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
    readonly " $data"?: useMovieReleaseDate_movie$data | undefined;
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
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = '68154bcefab8cb742afa2b0372addffb';
export default node;
