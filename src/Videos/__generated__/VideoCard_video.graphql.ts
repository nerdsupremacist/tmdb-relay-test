/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type VideoCard_video = {
    readonly thumbnail: string | null;
    readonly name: string;
    readonly type: string;
    readonly site: string;
    readonly key: string;
    readonly " $refType": "VideoCard_video";
};
export type VideoCard_video$data = VideoCard_video;
export type VideoCard_video$key = {
    readonly " $data"?: VideoCard_video$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"VideoCard_video">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VideoCard_video",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "thumbnail",
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
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "site",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "key",
      "storageKey": null
    }
  ],
  "type": "Video",
  "abstractKey": null
};
(node as any).hash = '1e787a26300e0b03f23c75d39b55d533';
export default node;
