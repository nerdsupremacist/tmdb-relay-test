/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type EpisodeHeader_episode = {
    readonly previous: {
        readonly name: string;
        readonly " $fragmentRefs": FragmentRefs<"LinkContainer_node">;
    } | null;
    readonly next: {
        readonly name: string;
        readonly " $fragmentRefs": FragmentRefs<"LinkContainer_node">;
    } | null;
    readonly images: {
        readonly stills: ReadonlyArray<{
            readonly aspectRatio: number;
            readonly url: string;
        }>;
    };
    readonly name: string;
    readonly seasonNumber: number;
    readonly episodeNumber: number;
    readonly show: {
        readonly name: string;
        readonly genres: ReadonlyArray<{
            readonly " $fragmentRefs": FragmentRefs<"GenreTag_genre">;
        }>;
        readonly " $fragmentRefs": FragmentRefs<"LinkContainer_node">;
    };
    readonly " $fragmentRefs": FragmentRefs<"useEpisodeAirDate_episode">;
    readonly " $refType": "EpisodeHeader_episode";
};
export type EpisodeHeader_episode$data = EpisodeHeader_episode;
export type EpisodeHeader_episode$key = {
    readonly " $data"?: EpisodeHeader_episode$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"EpisodeHeader_episode">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "LinkContainer_node"
},
v2 = [
  (v0/*: any*/),
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EpisodeHeader_episode",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "previous",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "next",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "EpisodeImages",
      "kind": "LinkedField",
      "name": "images",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "StillSizeDetailImage",
          "kind": "LinkedField",
          "name": "stills",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "aspectRatio",
              "storageKey": null
            },
            {
              "alias": "url",
              "args": [
                {
                  "kind": "Literal",
                  "name": "size",
                  "value": "Original"
                }
              ],
              "kind": "ScalarField",
              "name": "image",
              "storageKey": "image(size:\"Original\")"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "seasonNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "episodeNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TVShow",
      "kind": "LinkedField",
      "name": "show",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Genre",
          "kind": "LinkedField",
          "name": "genres",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "GenreTag_genre"
            }
          ],
          "storageKey": null
        },
        (v1/*: any*/)
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useEpisodeAirDate_episode"
    }
  ],
  "type": "Episode",
  "abstractKey": null
};
})();
(node as any).hash = '00a85caead672e3503084eae9417af88';
export default node;
