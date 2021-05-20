/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Videos_videos = ReadonlyArray<{
    readonly " $fragmentRefs": FragmentRefs<"VideoCard_video">;
    readonly " $refType": "Videos_videos";
}>;
export type Videos_videos$data = Videos_videos;
export type Videos_videos$key = ReadonlyArray<{
    readonly " $data"?: Videos_videos$data;
    readonly " $fragmentRefs": FragmentRefs<"Videos_videos">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Videos_videos",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VideoCard_video"
    }
  ],
  "type": "Video",
  "abstractKey": null
};
(node as any).hash = '63fa3569a6387aebc13b4a9b49202648';
export default node;
