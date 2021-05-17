/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SimpleEpisodeCard_episode = {
    readonly still: string | null;
    readonly episodeNumber: number;
    readonly name: string;
    readonly overview: string;
    readonly " $fragmentRefs": FragmentRefs<"EpisodeLinkContainer_episode">;
    readonly " $refType": "SimpleEpisodeCard_episode";
};
export type SimpleEpisodeCard_episode$data = SimpleEpisodeCard_episode;
export type SimpleEpisodeCard_episode$key = {
    readonly " $data"?: SimpleEpisodeCard_episode$data;
    readonly " $fragmentRefs": FragmentRefs<"SimpleEpisodeCard_episode">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SimpleEpisodeCard_episode",
  "selections": [
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
      "name": "episodeNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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
    }
  ],
  "type": "Episode",
  "abstractKey": null
};
(node as any).hash = '8ffc05c3b9b5f6c7da5383e5e8193cb3';
export default node;
