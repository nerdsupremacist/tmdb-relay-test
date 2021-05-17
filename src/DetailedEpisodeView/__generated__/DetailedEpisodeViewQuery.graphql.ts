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

fragment CastCredit_credit on CastCreditWithPerson {
  actor: value {
    ...PersonLinkContainer_person
    name
    profilePicture(size: W185)
    id
  }
  character
}

fragment Cast_credits on CastCreditWithPerson {
  ...CastCredit_credit
}

fragment CrewCredit_credit on CrewCreditWithPerson {
  actor: value {
    ...PersonLinkContainer_person
    name
    profilePicture(size: W185)
    id
  }
  job
}

fragment Crew_credits on CrewCreditWithPerson {
  ...CrewCredit_credit
}

fragment DetailedEpisodeViewRoot_episode on Episode {
  ...EpisodeHeader_episode
  streamingOptions {
    ...StreamingLinks_links
  }
  overview
  credits {
    guestStars {
      ...Cast_credits
    }
    cast {
      ...Cast_credits
    }
    crew {
      ...Crew_credits
    }
  }
}

fragment EpisodeHeader_episode on Episode {
  previous {
    ...EpisodeLinkContainer_episode
    name
    id
  }
  next {
    ...EpisodeLinkContainer_episode
    name
    id
  }
  images {
    stills {
      aspectRatio
      url: image(size: Original)
    }
  }
  name
  seasonNumber
  episodeNumber
  ...useEpisodeAirDate_episode
  show {
    ...ShowLinkContainer_show
    name
    genres {
      ...GenreTag_genre
    }
    id
  }
}

fragment EpisodeLinkContainer_episode on Episode {
  id
}

fragment GenreTag_genre on Genre {
  name
}

fragment PersonLinkContainer_person on Person {
  id
}

fragment ShowLinkContainer_show on TVShow {
  id
}

fragment StreamingLinkToolTip_option on StreamingOption {
  provider {
    name
  }
}

fragment StreamingLink_option on StreamingOption {
  ...StreamingLinkToolTip_option
  provider {
    iconURL
  }
  bestOffering {
    links {
      web
    }
    ...useStreamingLinkTitle_offering
    ...useStreamingLinkPriceDescription_offering
  }
}

fragment StreamingLinks_links on StreamingOption {
  provider {
    __typename
  }
  ...StreamingLink_option
}

fragment useEpisodeAirDate_episode on Episode {
  airDate
}

fragment useStreamingLinkPriceDescription_offering on StreamingOptionOffering {
  type
  price {
    amount
    currency
  }
}

fragment useStreamingLinkTitle_offering on StreamingOptionOffering {
  type
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v5 = {
  "alias": "actor",
  "args": null,
  "concreteType": "Person",
  "kind": "LinkedField",
  "name": "value",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "size",
          "value": "W185"
        }
      ],
      "kind": "ScalarField",
      "name": "profilePicture",
      "storageKey": "profilePicture(size:\"W185\")"
    }
  ],
  "storageKey": null
},
v6 = [
  (v5/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "character",
    "storageKey": null
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
                "concreteType": "Episode",
                "kind": "LinkedField",
                "name": "previous",
                "plural": false,
                "selections": (v4/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Episode",
                "kind": "LinkedField",
                "name": "next",
                "plural": false,
                "selections": (v4/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "EpisodeImages",
                "kind": "LinkedField",
                "name": "images",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "StillSizeDetailImage",
                    "kind": "LinkedField",
                    "name": "stills",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "aspectRatio",
                        "storageKey": null
                      },
                      {
                        "alias": "url",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "size",
                            "value": "Original"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "image",
                        "storageKey": "image(size:\"Original\")"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v3/*: any*/),
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
                "concreteType": "TVShow",
                "kind": "LinkedField",
                "name": "show",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Genre",
                    "kind": "LinkedField",
                    "name": "genres",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "StreamingOption",
                "kind": "LinkedField",
                "name": "streamingOptions",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "StreamingProvider",
                    "kind": "LinkedField",
                    "name": "provider",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "iconURL",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "StreamingOptionOffering",
                    "kind": "LinkedField",
                    "name": "bestOffering",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "StreamingLinks",
                        "kind": "LinkedField",
                        "name": "links",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "web",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "type",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Price",
                        "kind": "LinkedField",
                        "name": "price",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "amount",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "currency",
                            "storageKey": null
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
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "overview",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "EpisodeCreditsWithPerson",
                "kind": "LinkedField",
                "name": "credits",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CastCreditWithPerson",
                    "kind": "LinkedField",
                    "name": "guestStars",
                    "plural": true,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CastCreditWithPerson",
                    "kind": "LinkedField",
                    "name": "cast",
                    "plural": true,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CrewCreditWithPerson",
                    "kind": "LinkedField",
                    "name": "crew",
                    "plural": true,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "job",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "eed70a087ac9f7283951894d92963323",
    "id": null,
    "metadata": {},
    "name": "DetailedEpisodeViewQuery",
    "operationKind": "query",
    "text": "query DetailedEpisodeViewQuery(\n  $id: ID!\n) {\n  tv {\n    episode(id: $id) {\n      ...DetailedEpisodeViewRoot_episode\n      id\n    }\n  }\n}\n\nfragment CastCredit_credit on CastCreditWithPerson {\n  actor: value {\n    ...PersonLinkContainer_person\n    name\n    profilePicture(size: W185)\n    id\n  }\n  character\n}\n\nfragment Cast_credits on CastCreditWithPerson {\n  ...CastCredit_credit\n}\n\nfragment CrewCredit_credit on CrewCreditWithPerson {\n  actor: value {\n    ...PersonLinkContainer_person\n    name\n    profilePicture(size: W185)\n    id\n  }\n  job\n}\n\nfragment Crew_credits on CrewCreditWithPerson {\n  ...CrewCredit_credit\n}\n\nfragment DetailedEpisodeViewRoot_episode on Episode {\n  ...EpisodeHeader_episode\n  streamingOptions {\n    ...StreamingLinks_links\n  }\n  overview\n  credits {\n    guestStars {\n      ...Cast_credits\n    }\n    cast {\n      ...Cast_credits\n    }\n    crew {\n      ...Crew_credits\n    }\n  }\n}\n\nfragment EpisodeHeader_episode on Episode {\n  previous {\n    ...EpisodeLinkContainer_episode\n    name\n    id\n  }\n  next {\n    ...EpisodeLinkContainer_episode\n    name\n    id\n  }\n  images {\n    stills {\n      aspectRatio\n      url: image(size: Original)\n    }\n  }\n  name\n  seasonNumber\n  episodeNumber\n  ...useEpisodeAirDate_episode\n  show {\n    ...ShowLinkContainer_show\n    name\n    genres {\n      ...GenreTag_genre\n    }\n    id\n  }\n}\n\nfragment EpisodeLinkContainer_episode on Episode {\n  id\n}\n\nfragment GenreTag_genre on Genre {\n  name\n}\n\nfragment PersonLinkContainer_person on Person {\n  id\n}\n\nfragment ShowLinkContainer_show on TVShow {\n  id\n}\n\nfragment StreamingLinkToolTip_option on StreamingOption {\n  provider {\n    name\n  }\n}\n\nfragment StreamingLink_option on StreamingOption {\n  ...StreamingLinkToolTip_option\n  provider {\n    iconURL\n  }\n  bestOffering {\n    links {\n      web\n    }\n    ...useStreamingLinkTitle_offering\n    ...useStreamingLinkPriceDescription_offering\n  }\n}\n\nfragment StreamingLinks_links on StreamingOption {\n  provider {\n    __typename\n  }\n  ...StreamingLink_option\n}\n\nfragment useEpisodeAirDate_episode on Episode {\n  airDate\n}\n\nfragment useStreamingLinkPriceDescription_offering on StreamingOptionOffering {\n  type\n  price {\n    amount\n    currency\n  }\n}\n\nfragment useStreamingLinkTitle_offering on StreamingOptionOffering {\n  type\n}\n"
  }
};
})();
(node as any).hash = 'c57914eaf3cb4fb8789207ea473ca0e1';
export default node;
