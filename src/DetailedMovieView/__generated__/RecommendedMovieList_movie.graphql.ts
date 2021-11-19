/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import RecommendedMovieListPaginationQuery from "./RecommendedMovieListPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type RecommendedMovieList_movie = {
    readonly recommendations: {
        readonly totalCount: number;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"MovieListItem_movie">;
            } | null;
        } | null> | null;
    };
    readonly id: string;
    readonly " $refType": "RecommendedMovieList_movie";
};
export type RecommendedMovieList_movie$data = RecommendedMovieList_movie;
export type RecommendedMovieList_movie$key = {
    readonly " $data"?: RecommendedMovieList_movie$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RecommendedMovieList_movie">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "recommendations"
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
      "fragmentPathInResult": [
        "node"
      ],
      "operation": RecommendedMovieListPaginationQuery,
      "identifierField": "id"
    }
  },
  "name": "RecommendedMovieList_movie",
  "selections": [
    {
      "alias": "recommendations",
      "args": null,
      "concreteType": "MovieConnection",
      "kind": "LinkedField",
      "name": "__RecommendedMovieList_recommendations_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        },
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
              "concreteType": "Movie",
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
                  "name": "MovieListItem_movie"
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
})();
(node as any).hash = 'fc399d78c0ccb96658a325ed4a2f6f85';
export default node;
