/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type EpisodeHeader_episode = {
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
        readonly " $fragmentRefs": FragmentRefs<"ShowLinkContainer_show">;
    };
    readonly " $fragmentRefs": FragmentRefs<"useEpisodeAirDate_episode">;
    readonly " $refType": "EpisodeHeader_episode";
};
export type EpisodeHeader_episode$data = EpisodeHeader_episode;
export type EpisodeHeader_episode$key = {
    readonly " $data"?: EpisodeHeader_episode$data;
    readonly " $fragmentRefs": FragmentRefs<"EpisodeHeader_episode">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EpisodeHeader_episode",
  "selections": [
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
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ShowLinkContainer_show"
        }
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
(node as any).hash = 'a823bd5f0b1ab978ece4c02cbf2cea7d';
export default node;
