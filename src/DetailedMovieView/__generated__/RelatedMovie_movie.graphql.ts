/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RelatedMovie_movie = {
    readonly title: string;
    readonly poster: string | null;
    readonly " $fragmentRefs": FragmentRefs<"MovieLinkContainer_movie">;
    readonly " $refType": "RelatedMovie_movie";
};
export type RelatedMovie_movie$data = RelatedMovie_movie;
export type RelatedMovie_movie$key = {
    readonly " $data"?: RelatedMovie_movie$data;
    readonly " $fragmentRefs": FragmentRefs<"RelatedMovie_movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RelatedMovie_movie",
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
      "name": "MovieLinkContainer_movie"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = 'c1832b5d053dd2750cc780fbb59f423f';
export default node;
