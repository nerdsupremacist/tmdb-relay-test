/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieStreamingLinks_IMovie = {
    readonly streamingOptions: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"StreamingLink_StreamingOption">;
    }> | null;
    readonly " $refType": "MovieStreamingLinks_IMovie";
};
export type MovieStreamingLinks_IMovie$data = MovieStreamingLinks_IMovie;
export type MovieStreamingLinks_IMovie$key = {
    readonly " $data"?: MovieStreamingLinks_IMovie$data;
    readonly " $fragmentRefs": FragmentRefs<"MovieStreamingLinks_IMovie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieStreamingLinks_IMovie",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "StreamingOption",
      "kind": "LinkedField",
      "name": "streamingOptions",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "StreamingLink_StreamingOption"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
(node as any).hash = 'e7ab018b89e7f0e8cac0c71d652e6b8f';
export default node;
