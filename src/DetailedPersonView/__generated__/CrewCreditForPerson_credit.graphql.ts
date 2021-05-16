/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CrewCreditForPerson_credit = {
    readonly job: string;
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
    readonly " $refType": "CrewCreditForPerson_credit";
};
export type CrewCreditForPerson_credit$data = CrewCreditForPerson_credit;
export type CrewCreditForPerson_credit$key = {
    readonly " $data"?: CrewCreditForPerson_credit$data;
    readonly " $fragmentRefs": FragmentRefs<"CrewCreditForPerson_credit">;
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
  "name": "CrewCreditForPerson_credit",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "job",
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
  "type": "CrewCreditWithMovieOrTV",
  "abstractKey": null
};
})();
(node as any).hash = 'e2ff50379216b329363c821d784d8a0e';
export default node;
