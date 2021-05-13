/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieStreamingLinks_movie = {
    readonly streamingOptions: ReadonlyArray<{
        readonly provider: {
            readonly __typename: string;
        } | null;
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
          "alias": null,
          "args": null,
          "concreteType": "StreamingProvider",
          "kind": "LinkedField",
          "name": "provider",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "StreamingLink_option"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = '9961158b414e93014bd3827118914bd8';
export default node;
