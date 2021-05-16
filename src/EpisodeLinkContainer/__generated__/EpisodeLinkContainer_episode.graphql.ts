/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EpisodeLinkContainer_episode = {
    readonly id: string;
    readonly " $refType": "EpisodeLinkContainer_episode";
};
export type EpisodeLinkContainer_episode$data = EpisodeLinkContainer_episode;
export type EpisodeLinkContainer_episode$key = {
    readonly " $data"?: EpisodeLinkContainer_episode$data;
    readonly " $fragmentRefs": FragmentRefs<"EpisodeLinkContainer_episode">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EpisodeLinkContainer_episode",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Episode",
  "abstractKey": null
};
(node as any).hash = 'ac4e624e4f9d8c7552d3a6e0269a86da';
export default node;
