/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DetailedShowViewRoot_show = {
    readonly id: string;
    readonly streamingOptions: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"StreamingLinks_links">;
    }> | null;
    readonly overview: string;
    readonly lastEpisodeToAir: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedEpisodeCard_episode">;
    } | null;
    readonly nextEpisodeToAir: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedEpisodeCard_episode">;
    } | null;
    readonly topRatedEpisode: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedEpisodeCard_episode">;
    } | null;
    readonly credits: {
        readonly cast: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"Cast_credits">;
        }>;
        readonly crew: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"Crew_credits">;
        }>;
    };
    readonly seasons: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"SeasonRow_season">;
    }>;
    readonly videos: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"Videos_videos">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ShowHeader_show" | "ShowParallaxBackdrop_show" | "RecommendedShows_show" | "SimilarShows_show">;
    readonly " $refType": "DetailedShowViewRoot_show";
};
export type DetailedShowViewRoot_show$data = DetailedShowViewRoot_show;
export type DetailedShowViewRoot_show$key = {
    readonly " $data"?: DetailedShowViewRoot_show$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"DetailedShowViewRoot_show">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "FeaturedEpisodeCard_episode"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailedShowViewRoot_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "lastEpisodeToAir",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "nextEpisodeToAir",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "topRatedEpisode",
      "plural": false,
      "selections": (v0/*: any*/),
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
      "alias": null,
      "args": null,
      "concreteType": "Season",
      "kind": "LinkedField",
      "name": "seasons",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SeasonRow_season"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Video",
      "kind": "LinkedField",
      "name": "videos",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Videos_videos"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowHeader_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowParallaxBackdrop_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RecommendedShows_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SimilarShows_show"
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
})();
(node as any).hash = '9d229692c01b0759223cbe7d6a066254';
export default node;
