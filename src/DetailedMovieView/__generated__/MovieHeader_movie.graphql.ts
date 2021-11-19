/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type MovieHeader_movie = {
    readonly poster: string | null;
    readonly title: string;
    readonly runtime: number;
    readonly tagline: string;
    readonly genres: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"GenreTag_genre">;
    }>;
    readonly productionCompanies: ReadonlyArray<{
        readonly name: string;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"MovieRatingCircle_movie" | "useMovieStatus_movie" | "useMovieReleaseDate_movie">;
    readonly " $refType": "MovieHeader_movie";
};
export type MovieHeader_movie$data = MovieHeader_movie;
export type MovieHeader_movie$key = {
    readonly " $data"?: MovieHeader_movie$data | undefined;
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
          "value": "W342"
        }
      ],
      "kind": "ScalarField",
      "name": "poster",
      "storageKey": "poster(size:\"W342\")"
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
      "alias": null,
      "args": null,
      "concreteType": "ProductionCompany",
      "kind": "LinkedField",
      "name": "productionCompanies",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MovieRatingCircle_movie"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useMovieStatus_movie"
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
(node as any).hash = '8eccc9a1170805123c69a9a84a3b32ea';
export default node;
