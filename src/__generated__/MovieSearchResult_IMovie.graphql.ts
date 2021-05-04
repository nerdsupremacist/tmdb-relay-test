/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieSearchResult_IMovie = {
    readonly movieId: number;
    readonly title: string;
    readonly overview: string;
    readonly poster: string | null;
    readonly " $refType": "MovieSearchResult_IMovie";
};
export type MovieSearchResult_IMovie$data = MovieSearchResult_IMovie;
export type MovieSearchResult_IMovie$key = {
    readonly " $data"?: MovieSearchResult_IMovie$data;
    readonly " $fragmentRefs": FragmentRefs<"MovieSearchResult_IMovie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieSearchResult_IMovie",
  "selections": [
    {
      "alias": "movieId",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
(node as any).hash = 'a24942821e903529b6e033391c06623e';
export default node;
