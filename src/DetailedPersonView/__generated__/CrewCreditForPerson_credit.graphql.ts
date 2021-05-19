/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CrewCreditForPerson_credit = {
    readonly job: string;
    readonly value: {
        readonly __typename: string;
        readonly title?: string;
        readonly poster?: string | null;
        readonly name?: string;
        readonly " $fragmentRefs": FragmentRefs<"LinkContainer_node">;
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "LinkContainer_node"
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
            (v0/*: any*/)
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
            (v0/*: any*/)
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
(node as any).hash = '224d54060ca761346d4938b8a51b52ee';
export default node;
