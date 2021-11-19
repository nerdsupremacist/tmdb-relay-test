/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import PopularMoviesPaginationQuery from "./PopularMoviesPaginationQuery.graphql";
import { FragmentRefs } from "relay-runtime";
export type PopularMovies_data = {
    readonly movies: {
        readonly popular: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly " $fragmentRefs": FragmentRefs<"MovieListItem_movie">;
                } | null;
            } | null> | null;
        };
    };
    readonly " $refType": "PopularMovies_data";
};
export type PopularMovies_data$data = PopularMovies_data;
export type PopularMovies_data$key = {
    readonly " $data"?: PopularMovies_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"PopularMovies_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "movies",
  "popular"
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
      "operation": PopularMoviesPaginationQuery
    }
  },
  "name": "PopularMovies_data",
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
          "alias": "popular",
          "args": null,
          "concreteType": "MovieConnection",
          "kind": "LinkedField",
          "name": "__PopularMovies_data_movies_popular_connection",
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
(node as any).hash = '7992e734463eac820a2a57ad3d847f97';
export default node;
