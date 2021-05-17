/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ShowHeader_show = {
    readonly name: string;
    readonly poster: string | null;
    readonly episodeRunTime: ReadonlyArray<number>;
    readonly genres: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"GenreTag_genre">;
    }>;
    readonly networks: ReadonlyArray<{
        readonly name: string;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"ShowRatingCircle_show" | "useShowAirDate_show">;
    readonly " $refType": "ShowHeader_show";
};
export type ShowHeader_show$data = ShowHeader_show;
export type ShowHeader_show$key = {
    readonly " $data"?: ShowHeader_show$data;
    readonly " $fragmentRefs": FragmentRefs<"ShowHeader_show">;
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
  "name": "ShowHeader_show",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": "W342"
        }
      ],
      "kind": "ScalarField",
      "name": "poster",
      "storageKey": "poster(size:\"W342\")"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "episodeRunTime",
      "storageKey": null
    },
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
      "alias": null,
      "args": null,
      "concreteType": "Network",
      "kind": "LinkedField",
      "name": "networks",
      "plural": true,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowRatingCircle_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useShowAirDate_show"
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
})();
(node as any).hash = '26df75545030f7c4b2e36c0946b4d7f1';
export default node;
