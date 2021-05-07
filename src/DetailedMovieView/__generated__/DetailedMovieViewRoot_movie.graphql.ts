/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedMovieViewRoot_movie = {
    readonly overview: string;
    readonly credits: {
        readonly " $fragmentRefs": FragmentRefs<"Cast_credits">;
    };
    readonly recommendations: {
        readonly " $fragmentRefs": FragmentRefs<"RelatedMovieList_connection">;
    };
    readonly similar: {
        readonly " $fragmentRefs": FragmentRefs<"RelatedMovieList_connection">;
    };
    readonly " $fragmentRefs": FragmentRefs<"MovieHeader_movie" | "MovieStreamingLinks_movie" | "MovieParallaxBackdrop_movie">;
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
    "args": null,
    "kind": "FragmentSpread",
    "name": "RelatedMovieList_connection"
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
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MovieConnection",
      "kind": "LinkedField",
      "name": "recommendations",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MovieConnection",
      "kind": "LinkedField",
      "name": "similar",
      "plural": false,
      "selections": (v0/*: any*/),
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
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
})();
(node as any).hash = '024b7d95558f0684481309a14a9b3859';
export default node;
