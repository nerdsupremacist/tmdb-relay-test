/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedShowViewQueryVariables = {
    id: string;
};
export type DetailedShowViewQueryResponse = {
    readonly tv: {
        readonly show: {
            readonly " $fragmentRefs": FragmentRefs<"DetailedShowViewRoot_show">;
        };
    };
};
export type DetailedShowViewQuery = {
    readonly response: DetailedShowViewQueryResponse;
    readonly variables: DetailedShowViewQueryVariables;
};



/*
query DetailedShowViewQuery(
  $id: ID!
) {
  tv {
    show(id: $id) {
      ...DetailedShowViewRoot_show
      id
    }
  }
}

fragment DetailedShowViewRoot_show on TVShow {
  name
  lastEpisodeToAir {
    ...FeaturedEpisodeCard_episode
    id
  }
  nextEpisodeToAir {
    ...FeaturedEpisodeCard_episode
    id
  }
}

fragment EpisodeLinkContainer_episode on Episode {
  id
}

fragment FeaturedEpisodeCard_episode on Episode {
  ...EpisodeLinkContainer_episode
  name
  still(size: W300)
  seasonNumber
  episodeNumber
  ...useEpisodeAirDate_episode
  overview
}

fragment useEpisodeAirDate_episode on Episode {
  airDate
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  (v2/*: any*/),
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "size",
        "value": "W300"
      }
    ],
    "kind": "ScalarField",
    "name": "still",
    "storageKey": "still(size:\"W300\")"
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "seasonNumber",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "episodeNumber",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "airDate",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "overview",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DetailedShowViewQuery",
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
            "concreteType": "TVShow",
            "kind": "LinkedField",
            "name": "show",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DetailedShowViewRoot_show"
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
    "name": "DetailedShowViewQuery",
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
            "concreteType": "TVShow",
            "kind": "LinkedField",
            "name": "show",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Episode",
                "kind": "LinkedField",
                "name": "lastEpisodeToAir",
                "plural": false,
                "selections": (v4/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Episode",
                "kind": "LinkedField",
                "name": "nextEpisodeToAir",
                "plural": false,
                "selections": (v4/*: any*/),
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0396e09e39e114bffc612569881e475a",
    "id": null,
    "metadata": {},
    "name": "DetailedShowViewQuery",
    "operationKind": "query",
    "text": "query DetailedShowViewQuery(\n  $id: ID!\n) {\n  tv {\n    show(id: $id) {\n      ...DetailedShowViewRoot_show\n      id\n    }\n  }\n}\n\nfragment DetailedShowViewRoot_show on TVShow {\n  name\n  lastEpisodeToAir {\n    ...FeaturedEpisodeCard_episode\n    id\n  }\n  nextEpisodeToAir {\n    ...FeaturedEpisodeCard_episode\n    id\n  }\n}\n\nfragment EpisodeLinkContainer_episode on Episode {\n  id\n}\n\nfragment FeaturedEpisodeCard_episode on Episode {\n  ...EpisodeLinkContainer_episode\n  name\n  still(size: W300)\n  seasonNumber\n  episodeNumber\n  ...useEpisodeAirDate_episode\n  overview\n}\n\nfragment useEpisodeAirDate_episode on Episode {\n  airDate\n}\n"
  }
};
})();
(node as any).hash = 'facbe85e194eaab6f90cd69a2423c2de';
export default node;
