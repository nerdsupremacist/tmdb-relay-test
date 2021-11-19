/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DetailedEpisodeViewRoot_episode = {
    readonly id: string;
    readonly streamingOptions: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"StreamingLinks_links">;
    }> | null;
    readonly overview: string;
    readonly show: {
        readonly name: string;
        readonly " $fragmentRefs": FragmentRefs<"SimilarShows_show" | "RecommendedShows_show">;
    };
    readonly credits: {
        readonly guestStars: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"Cast_credits">;
        }>;
        readonly cast: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"Cast_credits">;
        }>;
        readonly crew: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"Crew_credits">;
        }>;
    };
    readonly videos: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"Videos_videos">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"EpisodeHeader_episode">;
    readonly " $refType": "DetailedEpisodeViewRoot_episode";
};
export type DetailedEpisodeViewRoot_episode$data = DetailedEpisodeViewRoot_episode;
export type DetailedEpisodeViewRoot_episode$key = {
    readonly " $data"?: DetailedEpisodeViewRoot_episode$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"DetailedEpisodeViewRoot_episode">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "Cast_credits"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailedEpisodeViewRoot_episode",
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
      "concreteType": "TVShow",
      "kind": "LinkedField",
      "name": "show",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SimilarShows_show"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "RecommendedShows_show"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "EpisodeCreditsWithPerson",
      "kind": "LinkedField",
      "name": "credits",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CastCreditWithPerson",
          "kind": "LinkedField",
          "name": "guestStars",
          "plural": true,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "CastCreditWithPerson",
          "kind": "LinkedField",
          "name": "cast",
          "plural": true,
          "selections": (v0/*: any*/),
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
      "name": "EpisodeHeader_episode"
    }
  ],
  "type": "Episode",
  "abstractKey": null
};
})();
(node as any).hash = 'da9d9b52a7c8db34d454484ea1c3b5dc';
export default node;
