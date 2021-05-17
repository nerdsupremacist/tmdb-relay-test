/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SeasonRow_season = {
    readonly seasonNumber: number;
    readonly episodes: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"SimpleEpisodeCard_episode">;
    }>;
    readonly " $refType": "SeasonRow_season";
};
export type SeasonRow_season$data = SeasonRow_season;
export type SeasonRow_season$key = {
    readonly " $data"?: SeasonRow_season$data;
    readonly " $fragmentRefs": FragmentRefs<"SeasonRow_season">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SeasonRow_season",
  "selections": [
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
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "episodes",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SimpleEpisodeCard_episode"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Season",
  "abstractKey": null
};
(node as any).hash = '9037dbbb6fe02d86099b132fca2c44a6';
export default node;
