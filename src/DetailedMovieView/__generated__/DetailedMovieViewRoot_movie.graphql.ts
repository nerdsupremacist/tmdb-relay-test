/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedMovieViewRoot_movie = {
    readonly streamingOptions: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"StreamingLinks_links">;
    }> | null;
    readonly overview: string;
    readonly credits: {
        readonly cast: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"Cast_credits">;
        }>;
        readonly crew: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"Crew_credits">;
        }>;
    };
    readonly " $fragmentRefs": FragmentRefs<"MovieHeader_movie" | "MovieParallaxBackdrop_movie" | "SimilarMovieList_movie" | "RecommendedMovieList_movie">;
    readonly " $refType": "DetailedMovieViewRoot_movie";
};
export type DetailedMovieViewRoot_movie$data = DetailedMovieViewRoot_movie;
export type DetailedMovieViewRoot_movie$key = {
    readonly " $data"?: DetailedMovieViewRoot_movie$data;
    readonly " $fragmentRefs": FragmentRefs<"DetailedMovieViewRoot_movie">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "count",
    "value": 20
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailedMovieViewRoot_movie",
  "selections": [
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
          "name": "StreamingLinks_links"
        }
      ],
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
      "concreteType": null,
      "kind": "LinkedField",
      "name": "credits",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CastCreditWithPerson",
          "kind": "LinkedField",
          "name": "cast",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "Cast_credits"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CrewCreditWithPerson",
          "kind": "LinkedField",
          "name": "crew",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "Crew_credits"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MovieHeader_movie"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MovieParallaxBackdrop_movie"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "SimilarMovieList_movie"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "RecommendedMovieList_movie"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
})();
(node as any).hash = '6aa735ddf59d5008dde3c9a304714dda';
export default node;
