/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedMovieViewRoot_IMovie = {
    readonly overview: string;
    readonly credits: {
        readonly " $fragmentRefs": FragmentRefs<"Cast_ICreditsBasicPerson">;
    };
    readonly recommendations: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"RelatedMovie_IMovie">;
            } | null;
        } | null> | null;
    };
    readonly similar: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"RelatedMovie_IMovie">;
            } | null;
        } | null> | null;
    };
    readonly " $fragmentRefs": FragmentRefs<"MovieHeader_IMovie" | "MovieStreamingLinks_IMovie" | "MovieParallaxBackdrop_IMovie">;
    readonly " $refType": "DetailedMovieViewRoot_IMovie";
};
export type DetailedMovieViewRoot_IMovie$data = DetailedMovieViewRoot_IMovie;
export type DetailedMovieViewRoot_IMovie$key = {
    readonly " $data"?: DetailedMovieViewRoot_IMovie$data;
    readonly " $fragmentRefs": FragmentRefs<"DetailedMovieViewRoot_IMovie">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "MovieEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RelatedMovie_IMovie"
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailedMovieViewRoot_IMovie",
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
          "name": "Cast_ICreditsBasicPerson"
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
      "name": "MovieHeader_IMovie"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MovieStreamingLinks_IMovie"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MovieParallaxBackdrop_IMovie"
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
})();
(node as any).hash = '3918cfa651924adee09713335ed3ee68';
export default node;
