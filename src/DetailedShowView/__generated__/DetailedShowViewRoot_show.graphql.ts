/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedShowViewRoot_show = {
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
        readonly " $fragmentRefs": FragmentRefs<"Cast_credits" | "Crew_credits">;
    };
    readonly seasons: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"SeasonRow_season">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ShowHeader_show" | "ShowStreamingLinks_show" | "ShowParallaxBackdrop_show">;
    readonly " $refType": "DetailedShowViewRoot_show";
};
export type DetailedShowViewRoot_show$data = DetailedShowViewRoot_show;
export type DetailedShowViewRoot_show$key = {
    readonly " $data"?: DetailedShowViewRoot_show$data;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowHeader_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowStreamingLinks_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowParallaxBackdrop_show"
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
})();
(node as any).hash = 'bddd95452cf5f087e97f88c31af25f27';
export default node;
