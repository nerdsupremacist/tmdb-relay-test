/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RelatedMovie_IMovie = {
    readonly title: string;
    readonly poster: string | null;
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
    }
  ],
  "type": "IMovie",
  "abstractKey": "__isIMovie"
};
(node as any).hash = 'd5899778e3c35ce81ce330a13a287f27';
export default node;
