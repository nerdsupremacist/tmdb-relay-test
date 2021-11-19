/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type MovieSearchResult_movie = {
    readonly title: string;
    readonly overview: string;
    readonly poster: string | null;
    readonly " $fragmentRefs": FragmentRefs<"LinkContainer_node">;
    readonly " $refType": "MovieSearchResult_movie";
};
export type MovieSearchResult_movie$data = MovieSearchResult_movie;
export type MovieSearchResult_movie$key = {
    readonly " $data"?: MovieSearchResult_movie$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"MovieSearchResult_movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieSearchResult_movie",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "LinkContainer_node"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = '6cf451fe39980b241bf3929c60c1e0ef';
export default node;
