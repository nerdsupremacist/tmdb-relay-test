/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type KnownForList_person = {
    readonly knownForDepartment: string;
    readonly knownFor: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"MovieOrShowResult_result">;
    }>;
    readonly credits: {
        readonly all: {
            readonly cast: ReadonlyArray<{
                readonly " $fragmentRefs": FragmentRefs<"CastCreditForPerson_credit">;
            }>;
        };
    };
    readonly " $refType": "KnownForList_person";
};
export type KnownForList_person$data = KnownForList_person;
export type KnownForList_person$key = {
    readonly " $data"?: KnownForList_person$data;
    readonly " $fragmentRefs": FragmentRefs<"KnownForList_person">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "KnownForList_person",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "knownForDepartment",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "knownFor",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MovieOrShowResult_result"
        }
      ],
      "storageKey": null
    },
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '52fd2a739999f2529c6f35be113e74b0';
export default node;
