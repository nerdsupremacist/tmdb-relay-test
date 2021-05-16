/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedEpisodeViewRoot_episode = {
    readonly name: string;
    readonly " $refType": "DetailedEpisodeViewRoot_episode";
};
export type DetailedEpisodeViewRoot_episode$data = DetailedEpisodeViewRoot_episode;
export type DetailedEpisodeViewRoot_episode$key = {
    readonly " $data"?: DetailedEpisodeViewRoot_episode$data;
    readonly " $fragmentRefs": FragmentRefs<"DetailedEpisodeViewRoot_episode">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailedEpisodeViewRoot_episode",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Episode",
  "abstractKey": null
};
(node as any).hash = '9c0a236bcfdfd9c55032cdb701ff05a9';
export default node;
