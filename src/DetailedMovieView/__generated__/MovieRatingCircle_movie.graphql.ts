/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Status = "Cancelled" | "InProduction" | "Planned" | "PostProduction" | "Released" | "Rumored" | "%future added value";
export type MovieRatingCircle_movie = {
    readonly rating: number;
    readonly numberOfRatings: number;
    readonly status: Status;
    readonly " $refType": "MovieRatingCircle_movie";
};
export type MovieRatingCircle_movie$data = MovieRatingCircle_movie;
export type MovieRatingCircle_movie$key = {
    readonly " $data"?: MovieRatingCircle_movie$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"MovieRatingCircle_movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieRatingCircle_movie",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rating",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "numberOfRatings",
      "storageKey": null
    },
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
(node as any).hash = '597ca9af1ec850e8f0f590d3bd6eeace';
export default node;
