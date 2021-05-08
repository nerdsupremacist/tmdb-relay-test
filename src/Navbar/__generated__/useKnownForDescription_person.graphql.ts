/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useKnownForDescription_person = {
    readonly knownFor: ReadonlyArray<{
        readonly __typename: "MovieResult";
        readonly title: string;
    } | {
        readonly __typename: "TVShowResult";
        readonly name: string;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }>;
    readonly " $refType": "useKnownForDescription_person";
};
export type useKnownForDescription_person$data = useKnownForDescription_person;
export type useKnownForDescription_person$key = {
    readonly " $data"?: useKnownForDescription_person$data;
    readonly " $fragmentRefs": FragmentRefs<"useKnownForDescription_person">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useKnownForDescription_person",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "knownFor",
      "plural": true,
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
            }
          ],
          "type": "MovieResult",
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
            }
          ],
          "type": "TVShowResult",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PersonListResult",
  "abstractKey": null
};
(node as any).hash = 'be9cb0c44b6b64efbfc1204df22ac8a0';
export default node;
