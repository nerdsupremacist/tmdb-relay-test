/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieListItem_movie = {
    readonly title: string;
    readonly poster: string | null;
    readonly " $fragmentRefs": FragmentRefs<"MovieLinkContainer_movie">;
    readonly " $refType": "MovieListItem_movie";
};
export type MovieListItem_movie$data = MovieListItem_movie;
export type MovieListItem_movie$key = {
    readonly " $data"?: MovieListItem_movie$data;
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
      "name": "MovieLinkContainer_movie"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
(node as any).hash = 'c6c6af27e73009f8089cedd147026d7e';
export default node;
