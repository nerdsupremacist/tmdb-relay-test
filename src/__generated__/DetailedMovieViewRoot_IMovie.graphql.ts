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
        readonly genres: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"GenreTag_Genre">;
        }>;
    };
    readonly credits: {
        readonly cast: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"CastCredit_CastCreditBasicPerson">;
        }>;
    };
    readonly streamingOptions: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"StreamingLink_StreamingOption">;
    }> | null;
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "credits",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CastCreditBasicPerson",
          "kind": "LinkedField",
          "name": "cast",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "CastCredit_CastCreditBasicPerson"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "StreamingOption",
      "kind": "LinkedField",
      "name": "streamingOptions",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "StreamingLink_StreamingOption"
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
          "value": "Original"
        }
      ],
      "kind": "ScalarField",
      "name": "backdrop",
      "storageKey": "backdrop(size:\"Original\")"
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
(node as any).hash = 'feb04b279ee65cd514168c89b5e2424b';
export default node;
