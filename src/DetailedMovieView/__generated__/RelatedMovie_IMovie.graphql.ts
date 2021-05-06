/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RelatedMovie_IMovie = {
    readonly movieId: number;
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
      "alias": "movieId",
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
(node as any).hash = 'f2a0e6f66d34639082075f19b03e1b7d';
export default node;
