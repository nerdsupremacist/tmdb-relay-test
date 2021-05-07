/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieStreamingLinks_movie = {
    readonly streamingOptions: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"StreamingLink_option">;
    }> | null;
    readonly " $refType": "MovieStreamingLinks_movie";
};
export type MovieStreamingLinks_movie$data = MovieStreamingLinks_movie;
export type MovieStreamingLinks_movie$key = {
    readonly " $data"?: MovieStreamingLinks_movie$data;
    readonly " $fragmentRefs": FragmentRefs<"MovieStreamingLinks_movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieStreamingLinks_movie",
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
          "name": "StreamingLink_option"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
(node as any).hash = '22a8dd19ae8d27869b01a03c25f8f5ce';
export default node;
