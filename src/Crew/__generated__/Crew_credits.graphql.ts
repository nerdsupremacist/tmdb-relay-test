/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Crew_credits = ReadonlyArray<{
    readonly " $fragmentRefs": FragmentRefs<"CrewCredit_credit">;
    readonly " $refType": "Crew_credits";
}>;
export type Crew_credits$data = Crew_credits;
export type Crew_credits$key = ReadonlyArray<{
    readonly " $data"?: Crew_credits$data;
    readonly " $fragmentRefs": FragmentRefs<"Crew_credits">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Crew_credits",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CrewCredit_credit"
    }
  ],
  "type": "CrewCreditWithPerson",
  "abstractKey": null
};
(node as any).hash = 'af5c86931872f0785385465f052d1c36';
export default node;
