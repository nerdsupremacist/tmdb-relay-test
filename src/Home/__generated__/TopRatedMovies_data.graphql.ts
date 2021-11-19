/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import TopRatedMoviesPaginationQuery from "./TopRatedMoviesPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type TopRatedMovies_data = {
    readonly movies: {
        readonly topRated: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly " $fragmentRefs": FragmentRefs<"MovieListItem_movie">;
                } | null;
            } | null> | null;
        };
    };
    readonly " $refType": "TopRatedMovies_data";
};
export type TopRatedMovies_data$data = TopRatedMovies_data;
export type TopRatedMovies_data$key = {
    readonly " $data"?: TopRatedMovies_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TopRatedMovies_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "movies",
  "topRated"
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
      "operation": TopRatedMoviesPaginationQuery
    }
  },
  "name": "TopRatedMovies_data",
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
          "alias": "topRated",
          "args": null,
          "concreteType": "MovieConnection",
          "kind": "LinkedField",
          "name": "__TopRatedMovies_topRated_connection",
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
(node as any).hash = '75916b114cce2a2fdf4e275cef164333';
export default node;
