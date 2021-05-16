/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedShowViewRoot_show = {
    readonly name: string;
    readonly lastEpisodeToAir: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedEpisodeCard_episode">;
    } | null;
    readonly nextEpisodeToAir: {
        readonly " $fragmentRefs": FragmentRefs<"FeaturedEpisodeCard_episode">;
    } | null;
    readonly " $refType": "DetailedShowViewRoot_show";
};
export type DetailedShowViewRoot_show$data = DetailedShowViewRoot_show;
export type DetailedShowViewRoot_show$key = {
    readonly " $data"?: DetailedShowViewRoot_show$data;
    readonly " $fragmentRefs": FragmentRefs<"DetailedShowViewRoot_show">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "FeaturedEpisodeCard_episode"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailedShowViewRoot_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "lastEpisodeToAir",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "nextEpisodeToAir",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "TVShow",
  "abstractKey": null
};
})();
(node as any).hash = '4c8019fcf514811416fe86980666e60a';
export default node;
