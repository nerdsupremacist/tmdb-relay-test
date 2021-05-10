/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchResult_result = {
    readonly __typename: "Movie";
    readonly " $fragmentRefs": FragmentRefs<"MovieSearchResult_movie">;
    readonly " $refType": "SearchResult_result";
} | {
    readonly __typename: "Person";
    readonly " $fragmentRefs": FragmentRefs<"PersonSearchResult_person">;
    readonly " $refType": "SearchResult_result";
} | {
    /*This will never be '%other', but we need some
    value in case none of the concrete values match.*/
    readonly __typename: "%other";
    readonly " $refType": "SearchResult_result";
};
export type SearchResult_result$data = SearchResult_result;
export type SearchResult_result$key = {
    readonly " $data"?: SearchResult_result$data;
    readonly " $fragmentRefs": FragmentRefs<"SearchResult_result">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchResult_result",
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
          "name": "MovieSearchResult_movie"
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
          "name": "PersonSearchResult_person"
        }
      ],
      "type": "Person",
      "abstractKey": null
    }
  ],
  "type": "MovieOrTVOrPeople",
  "abstractKey": "__isMovieOrTVOrPeople"
};
(node as any).hash = 'a1c2b5d01629af14e5645688f3403600';
export default node;
