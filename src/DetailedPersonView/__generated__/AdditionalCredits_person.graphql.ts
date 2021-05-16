/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AdditionalCredits_person = {
    readonly credits: {
        readonly all: {
            readonly cast: ReadonlyArray<{
                readonly " $fragmentRefs": FragmentRefs<"CastCreditForPerson_credit">;
            }>;
            readonly crew: ReadonlyArray<{
                readonly " $fragmentRefs": FragmentRefs<"CrewCreditForPerson_credit">;
            }>;
        };
    };
    readonly " $fragmentRefs": FragmentRefs<"useIsActor_person">;
    readonly " $refType": "AdditionalCredits_person";
};
export type AdditionalCredits_person$data = AdditionalCredits_person;
export type AdditionalCredits_person$key = {
    readonly " $data"?: AdditionalCredits_person$data;
    readonly " $fragmentRefs": FragmentRefs<"AdditionalCredits_person">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AdditionalCredits_person",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PersonCredits",
      "kind": "LinkedField",
      "name": "credits",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CreditsWithMovieOrTV",
          "kind": "LinkedField",
          "name": "all",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "CastCreditWithMovieOrTV",
              "kind": "LinkedField",
              "name": "cast",
              "plural": true,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CastCreditForPerson_credit"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "CrewCreditWithMovieOrTV",
              "kind": "LinkedField",
              "name": "crew",
              "plural": true,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "CrewCreditForPerson_credit"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useIsActor_person"
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = 'b1be62f3f6e2660df9595c0b372c48f0';
export default node;
