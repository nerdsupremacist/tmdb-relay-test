/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedEpisodeViewQueryVariables = {
    id: string;
};
export type DetailedEpisodeViewQueryResponse = {
    readonly tv: {
        readonly episode: {
            readonly " $fragmentRefs": FragmentRefs<"DetailedEpisodeViewRoot_episode">;
        };
    };
};
export type DetailedEpisodeViewQuery = {
    readonly response: DetailedEpisodeViewQueryResponse;
    readonly variables: DetailedEpisodeViewQueryVariables;
};



/*
query DetailedEpisodeViewQuery(
  $id: ID!
) {
  tv {
    episode(id: $id) {
      ...DetailedEpisodeViewRoot_episode
      id
    }
  }
}

fragment DetailedEpisodeViewRoot_episode on Episode {
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DetailedEpisodeViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TV",
        "kind": "LinkedField",
        "name": "tv",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Episode",
            "kind": "LinkedField",
            "name": "episode",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DetailedEpisodeViewRoot_episode"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DetailedEpisodeViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TV",
        "kind": "LinkedField",
        "name": "tv",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Episode",
            "kind": "LinkedField",
            "name": "episode",
            "plural": false,
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
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d106fcd294c4a711df01a9960e6dd4d6",
    "id": null,
    "metadata": {},
    "name": "DetailedEpisodeViewQuery",
    "operationKind": "query",
    "text": "query DetailedEpisodeViewQuery(\n  $id: ID!\n) {\n  tv {\n    episode(id: $id) {\n      ...DetailedEpisodeViewRoot_episode\n      id\n    }\n  }\n}\n\nfragment DetailedEpisodeViewRoot_episode on Episode {\n  name\n}\n"
  }
};
})();
(node as any).hash = 'c57914eaf3cb4fb8789207ea473ca0e1';
export default node;
