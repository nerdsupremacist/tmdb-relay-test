/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CastCreditForPerson_credit = {
    readonly character: string;
    readonly value: {
        readonly __typename: "Movie";
        readonly title: string;
        readonly poster: string | null;
        readonly " $fragmentRefs": FragmentRefs<"MovieLinkContainer_movie">;
    } | {
        readonly __typename: "TVShow";
        readonly name: string;
        readonly poster: string | null;
        readonly " $fragmentRefs": FragmentRefs<"ShowLinkContainer_show">;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    };
    readonly " $refType": "CastCreditForPerson_credit";
};
export type CastCreditForPerson_credit$data = CastCreditForPerson_credit;
export type CastCreditForPerson_credit$key = {
    readonly " $data"?: CastCreditForPerson_credit$data;
    readonly " $fragmentRefs": FragmentRefs<"CastCreditForPerson_credit">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "size",
      "value": "W185"
    }
  ],
  "kind": "ScalarField",
  "name": "poster",
  "storageKey": "poster(size:\"W185\")"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CastCreditForPerson_credit",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "character",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "value",
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
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            (v0/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "MovieLinkContainer_movie"
            }
          ],
          "type": "Movie",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            (v0/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ShowLinkContainer_show"
            }
          ],
          "type": "TVShow",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CastCreditWithMovieOrTV",
  "abstractKey": null
};
})();
(node as any).hash = '64eb557ed92209b1034312cc52b339e2';
export default node;
