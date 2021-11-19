/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type useKnownForDescription_person = {
    readonly knownFor: ReadonlyArray<{
        readonly __typename: "Movie";
        readonly title: string;
    } | {
        readonly __typename: "TVShow";
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
    readonly " $data"?: useKnownForDescription_person$data | undefined;
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
            }
          ],
          "type": "TVShow",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
(node as any).hash = '33c1b0b4bf9b055731bd63647b0068fe';
export default node;
