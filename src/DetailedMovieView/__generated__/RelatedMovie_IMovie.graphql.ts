/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RelatedMovie_IMovie = {
    readonly title: string;
    readonly poster: string | null;
    readonly " $fragmentRefs": FragmentRefs<"MovieLinkContainer_IMovie">;
    readonly " $refType": "RelatedMovie_IMovie";
};
export type RelatedMovie_IMovie$data = RelatedMovie_IMovie;
export type RelatedMovie_IMovie$key = {
    readonly " $data"?: RelatedMovie_IMovie$data;
    readonly " $fragmentRefs": FragmentRefs<"RelatedMovie_IMovie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelatedMovie_IMovie",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": "W154"
        }
      ],
      "kind": "ScalarField",
      "name": "poster",
      "storageKey": "poster(size:\"W154\")"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MovieLinkContainer_IMovie"
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
(node as any).hash = '9b7be02dd723ba44381f4713d5236174';
export default node;
