/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Status = "Cancelled" | "InProduction" | "Planned" | "PostProduction" | "Released" | "Rumored" | "%future added value";
export type DetailedMovieViewRoot_IMovie = {
    readonly title: string;
    readonly rating: number;
    readonly overview: string;
    readonly details: {
        readonly status: Status;
        readonly runtime: number;
        readonly tagline: string;
    };
    readonly poster: string | null;
    readonly backdrop: string | null;
    readonly " $refType": "DetailedMovieViewRoot_IMovie";
};
export type DetailedMovieViewRoot_IMovie$data = DetailedMovieViewRoot_IMovie;
export type DetailedMovieViewRoot_IMovie$key = {
    readonly " $data"?: DetailedMovieViewRoot_IMovie$data;
    readonly " $fragmentRefs": FragmentRefs<"DetailedMovieViewRoot_IMovie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailedMovieViewRoot_IMovie",
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
      "name": "rating",
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
          "name": "status",
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
        }
      ],
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
(node as any).hash = '6209aa4c4ee6c47363cc7c08fc7ebba4';
export default node;
