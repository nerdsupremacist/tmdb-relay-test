/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedMovieViewRoot_movie = {
    readonly overview: string;
    readonly credits: {
        readonly " $fragmentRefs": FragmentRefs<"Cast_credits" | "Crew_credits">;
    };
    readonly " $fragmentRefs": FragmentRefs<"MovieHeader_movie" | "MovieStreamingLinks_movie" | "MovieParallaxBackdrop_movie" | "SimilarMovieList_movie" | "RecommendedMovieList_movie">;
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "Cast_credits"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Crew_credits"
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
      "name": "MovieStreamingLinks_movie"
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
(node as any).hash = '8dc38b77b2a2dda5a3c58ef476e83695';
export default node;
