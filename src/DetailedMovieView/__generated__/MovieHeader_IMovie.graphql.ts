/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieHeader_IMovie = {
    readonly poster: string | null;
    readonly title: string;
    readonly rating: number;
    readonly details: {
        readonly runtime: number;
        readonly tagline: string;
        readonly genres: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"GenreTag_Genre">;
        }>;
    };
    readonly " $refType": "MovieHeader_IMovie";
};
export type MovieHeader_IMovie$data = MovieHeader_IMovie;
export type MovieHeader_IMovie$key = {
    readonly " $data"?: MovieHeader_IMovie$data;
    readonly " $fragmentRefs": FragmentRefs<"MovieHeader_IMovie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieHeader_IMovie",
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
      "concreteType": "DetailedMovie",
      "kind": "LinkedField",
      "name": "details",
      "plural": false,
      "selections": [
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
              "name": "GenreTag_Genre"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
(node as any).hash = 'be6c21910d96d40cd3168b255e6ffcc9';
export default node;
