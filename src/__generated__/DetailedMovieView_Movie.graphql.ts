/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedMovieView_Movie = {
    readonly title: string;
    readonly overview: string;
    readonly poster: string | null;
    readonly backdrop: string | null;
    readonly " $refType": "DetailedMovieView_Movie";
};
export type DetailedMovieView_Movie$data = DetailedMovieView_Movie;
export type DetailedMovieView_Movie$key = {
    readonly " $data"?: DetailedMovieView_Movie$data;
    readonly " $fragmentRefs": FragmentRefs<"DetailedMovieView_Movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailedMovieView_Movie",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "overview",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": "W185"
        }
      ],
      "kind": "ScalarField",
      "name": "poster",
      "storageKey": "poster(size:\"W185\")"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": "W780"
        }
      ],
      "kind": "ScalarField",
      "name": "backdrop",
      "storageKey": "backdrop(size:\"W780\")"
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
(node as any).hash = '32fc56927306b3db5b6d652195c06cfe';
export default node;
