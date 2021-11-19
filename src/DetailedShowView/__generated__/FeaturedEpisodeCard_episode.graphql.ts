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
    readonly " $fragmentRefs": FragmentRefs<"LinkContainer_node" | "useEpisodeAirDate_episode">;
    readonly " $refType": "FeaturedEpisodeCard_episode";
};
export type FeaturedEpisodeCard_episode$data = FeaturedEpisodeCard_episode;
export type FeaturedEpisodeCard_episode$key = {
    readonly " $data"?: FeaturedEpisodeCard_episode$data | undefined;
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
      "name": "LinkContainer_node"
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
(node as any).hash = 'e403b2a6fcd2c8e53ebcc4971226a85a';
export default node;
