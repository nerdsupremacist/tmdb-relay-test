/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieHeader_movie = {
    readonly poster: string | null;
    readonly title: string;
    readonly rating: number;
    readonly runtime: number;
    readonly tagline: string;
    readonly genres: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"GenreTag_genre">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"useMovieReleaseDate_movie">;
    readonly " $refType": "MovieHeader_movie";
};
export type MovieHeader_movie$data = MovieHeader_movie;
export type MovieHeader_movie$key = {
    readonly " $data"?: MovieHeader_movie$data;
    readonly " $fragmentRefs": FragmentRefs<"MovieHeader_movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieHeader_movie",
  "selections": [
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
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
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
      "name": "runtime",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tagline",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Genre",
      "kind": "LinkedField",
      "name": "genres",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "GenreTag_genre"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useMovieReleaseDate_movie"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = 'f4a648850449cac93cfb586c67d04d6b';
export default node;
