/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import NowPlayingMoviesPaginationQuery from "./NowPlayingMoviesPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type NowPlayingMovies_data = {
    readonly movies: {
        readonly nowPlaying: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly " $fragmentRefs": FragmentRefs<"MovieListItem_movie">;
                } | null;
            } | null> | null;
        };
    };
    readonly " $refType": "NowPlayingMovies_data";
};
export type NowPlayingMovies_data$data = NowPlayingMovies_data;
export type NowPlayingMovies_data$key = {
    readonly " $data"?: NowPlayingMovies_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"NowPlayingMovies_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "movies",
  "nowPlaying"
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
      "operation": NowPlayingMoviesPaginationQuery
    }
  },
  "name": "NowPlayingMovies_data",
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
          "alias": "nowPlaying",
          "args": null,
          "concreteType": "MovieConnection",
          "kind": "LinkedField",
          "name": "__NowPlayingMovies_data_movies_nowPlaying_connection",
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
(node as any).hash = 'c654a34b3dba2c6a9559cfe1c1f29660';
export default node;
