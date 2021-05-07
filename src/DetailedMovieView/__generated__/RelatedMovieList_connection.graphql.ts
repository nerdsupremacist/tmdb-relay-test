/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RelatedMovieList_connection = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly " $fragmentRefs": FragmentRefs<"RelatedMovie_movie">;
        } | null;
    } | null> | null;
    readonly " $refType": "RelatedMovieList_connection";
};
export type RelatedMovieList_connection$data = RelatedMovieList_connection;
export type RelatedMovieList_connection$key = {
    readonly " $data"?: RelatedMovieList_connection$data;
    readonly " $fragmentRefs": FragmentRefs<"RelatedMovieList_connection">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelatedMovieList_connection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MovieEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "RelatedMovie_movie"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MovieConnection",
  "abstractKey": null
};
(node as any).hash = 'd2f8dd1293fa50cff6f5d45b7cf28fe5';
export default node;
