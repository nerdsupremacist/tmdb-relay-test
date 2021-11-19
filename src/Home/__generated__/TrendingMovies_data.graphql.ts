/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import TrendingMoviesPaginationQuery from "./TrendingMoviesPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type TrendingMovies_data = {
    readonly movies: {
        readonly trending: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly " $fragmentRefs": FragmentRefs<"MovieListItem_movie">;
                } | null;
            } | null> | null;
        };
    };
    readonly " $refType": "TrendingMovies_data";
};
export type TrendingMovies_data$data = TrendingMovies_data;
export type TrendingMovies_data$key = {
    readonly " $data"?: TrendingMovies_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TrendingMovies_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "movies",
  "trending"
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
      "fragmentPathInResult": [],
      "operation": TrendingMoviesPaginationQuery
    }
  },
  "name": "TrendingMovies_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Movies",
      "kind": "LinkedField",
      "name": "movies",
      "plural": false,
      "selections": [
        {
          "alias": "trending",
          "args": null,
          "concreteType": "MovieConnection",
          "kind": "LinkedField",
          "name": "__TrendingMovies_trending_connection",
          "plural": false,
          "selections": [
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '4fd1ea4c2d05f4ef3499dfce63ca5aed';
export default node;
