/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Crew_credits = {
    readonly crew: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"CrewCredit_credit">;
    }>;
    readonly " $refType": "Crew_credits";
};
export type Crew_credits$data = Crew_credits;
export type Crew_credits$key = {
    readonly " $data"?: Crew_credits$data;
    readonly " $fragmentRefs": FragmentRefs<"Crew_credits">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Crew_credits",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CrewCreditWithPerson",
      "kind": "LinkedField",
      "name": "crew",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CrewCredit_credit"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "CreditsWithPerson",
  "abstractKey": null
};
(node as any).hash = 'd835d43982e0c9750e07bf2ae754e3fb';
export default node;
