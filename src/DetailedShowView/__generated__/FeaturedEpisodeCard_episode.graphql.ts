/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type FeaturedEpisodeCard_episode = {
    readonly name: string;
    readonly still: string | null;
    readonly seasonNumber: number;
    readonly episodeNumber: number;
    readonly overview: string;
    readonly " $fragmentRefs": FragmentRefs<"EpisodeLinkContainer_episode" | "useEpisodeAirDate_episode">;
    readonly " $refType": "FeaturedEpisodeCard_episode";
};
export type FeaturedEpisodeCard_episode$data = FeaturedEpisodeCard_episode;
export type FeaturedEpisodeCard_episode$key = {
    readonly " $data"?: FeaturedEpisodeCard_episode$data;
    readonly " $fragmentRefs": FragmentRefs<"FeaturedEpisodeCard_episode">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedEpisodeCard_episode",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": "W300"
        }
      ],
      "kind": "ScalarField",
      "name": "still",
      "storageKey": "still(size:\"W300\")"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "seasonNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "episodeNumber",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "EpisodeLinkContainer_episode"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useEpisodeAirDate_episode"
    }
  ],
  "type": "Episode",
  "abstractKey": null
};
(node as any).hash = 'ac8efc8a4ea5f129a3cc2e1d881ef9af';
export default node;
