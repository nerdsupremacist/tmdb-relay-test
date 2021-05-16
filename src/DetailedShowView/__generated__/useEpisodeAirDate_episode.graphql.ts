/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useEpisodeAirDate_episode = {
    readonly airDate: string;
    readonly " $refType": "useEpisodeAirDate_episode";
};
export type useEpisodeAirDate_episode$data = useEpisodeAirDate_episode;
export type useEpisodeAirDate_episode$key = {
    readonly " $data"?: useEpisodeAirDate_episode$data;
    readonly " $fragmentRefs": FragmentRefs<"useEpisodeAirDate_episode">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useEpisodeAirDate_episode",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "airDate",
      "storageKey": null
    }
  ],
  "type": "Episode",
  "abstractKey": null
};
(node as any).hash = '1fdd3b8b569ad9dda3bfac9e31ab07a9';
export default node;
