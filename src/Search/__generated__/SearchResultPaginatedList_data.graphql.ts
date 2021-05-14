/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchResultPaginatedList_data = {
    readonly search: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly __typename: string;
                readonly id?: string;
                readonly " $fragmentRefs": FragmentRefs<"SearchResult_result">;
            } | null;
        } | null> | null;
    };
    readonly " $refType": "SearchResultPaginatedList_data";
};
export type SearchResultPaginatedList_data$data = SearchResultPaginatedList_data;
export type SearchResultPaginatedList_data$key = {
    readonly " $data"?: SearchResultPaginatedList_data$data;
    readonly " $fragmentRefs": FragmentRefs<"SearchResultPaginatedList_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "search"
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 20,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "term"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./SearchResultPaginatedListPaginationQuery.graphql.ts')
    }
  },
  "name": "SearchResultPaginatedList_data",
  "selections": [
    {
      "alias": "search",
      "args": [
        {
          "kind": "Variable",
          "name": "term",
          "variableName": "term"
        }
      ],
      "concreteType": "MovieOrTVOrPeopleConnection",
      "kind": "LinkedField",
      "name": "__SearchResultPaginatedList_data_search_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MovieOrTVOrPeopleEdge",
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
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "SearchResult_result"
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v1/*: any*/),
                  "type": "Movie",
                  "abstractKey": null
                },
                {
                  "kind": "InlineFragment",
                  "selections": (v1/*: any*/),
                  "type": "Person",
                  "abstractKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = 'a60a2d280b0de9acd254896649e166e6';
export default node;
