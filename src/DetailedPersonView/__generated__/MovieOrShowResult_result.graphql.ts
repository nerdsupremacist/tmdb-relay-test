/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieOrShowResult_result = {
    readonly __typename: "Movie";
    readonly " $fragmentRefs": FragmentRefs<"MovieListItem_movie">;
    readonly " $refType": "MovieOrShowResult_result";
} | {
    readonly __typename: "TVShow";
    readonly " $fragmentRefs": FragmentRefs<"ShowListItem_show">;
    readonly " $refType": "MovieOrShowResult_result";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "MovieOrShowResult_result";
};
export type MovieOrShowResult_result$data = MovieOrShowResult_result;
export type MovieOrShowResult_result$key = {
    readonly " $data"?: MovieOrShowResult_result$data;
    readonly " $fragmentRefs": FragmentRefs<"MovieOrShowResult_result">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieOrShowResult_result",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MovieListItem_movie"
        }
      ],
      "type": "Movie",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ShowListItem_show"
        }
      ],
      "type": "TVShow",
      "abstractKey": null
    }
  ],
  "type": "MovieOrTV",
  "abstractKey": "__isMovieOrTV"
};
(node as any).hash = '13488ab7d4a6038cdc9adb1f7ecf107b';
export default node;
