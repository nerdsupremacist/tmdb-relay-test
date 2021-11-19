/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type MovieListItem_movie = {
    readonly title: string;
    readonly poster: string | null;
    readonly " $fragmentRefs": FragmentRefs<"LinkContainer_node">;
    readonly " $refType": "MovieListItem_movie";
};
export type MovieListItem_movie$data = MovieListItem_movie;
export type MovieListItem_movie$key = {
    readonly " $data"?: MovieListItem_movie$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"MovieListItem_movie">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieListItem_movie",
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
      "name": "LinkContainer_node"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = 'a7215683de2a626588ab2a3219ff666f';
export default node;
