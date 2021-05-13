/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieSearchResult_movie = {
    readonly title: string;
    readonly overview: string;
    readonly poster: string | null;
    readonly " $fragmentRefs": FragmentRefs<"MovieLinkContainer_movie">;
    readonly " $refType": "MovieSearchResult_movie";
};
export type MovieSearchResult_movie$data = MovieSearchResult_movie;
export type MovieSearchResult_movie$key = {
    readonly " $data"?: MovieSearchResult_movie$data;
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
      "name": "MovieLinkContainer_movie"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = '420868899ff55c7514a904a5dcd1b338';
export default node;
