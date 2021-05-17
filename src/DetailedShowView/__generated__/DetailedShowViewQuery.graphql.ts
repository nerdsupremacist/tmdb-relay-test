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

fragment CastCredit_credit on CastCreditWithPerson {
  actor: value {
    ...PersonLinkContainer_person
    name
    profilePicture(size: W185)
    id
  }
  character
}

fragment Cast_credits on CreditsWithPerson {
  cast {
    ...CastCredit_credit
  }
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

fragment Crew_credits on CreditsWithPerson {
  crew {
    ...CrewCredit_credit
  }
}

fragment DetailedShowViewRoot_show on TVShow {
  ...ShowHeader_show
  ...ShowStreamingLinks_show
  overview
  lastEpisodeToAir {
    ...FeaturedEpisodeCard_episode
    id
  }
  nextEpisodeToAir {
    ...FeaturedEpisodeCard_episode
    id
  }
  topRatedEpisode {
    ...FeaturedEpisodeCard_episode
    id
  }
  credits {
    __typename
    ...Cast_credits
    ...Crew_credits
  }
  ...ShowParallaxBackdrop_show
  seasons {
    ...SeasonRow_season
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

fragment GenreTag_genre on Genre {
  name
}

fragment PersonLinkContainer_person on Person {
  id
}

fragment SeasonRow_season on Season {
  seasonNumber
  episodes {
    ...SimpleEpisodeCard_episode
    id
  }
}

fragment ShowHeader_show on TVShow {
  ...ShowRatingCircle_show
  name
  poster(size: W342)
  episodeRunTime
  ...useShowAirDate_show
  genres {
    ...GenreTag_genre
  }
  networks {
    name
  }
}

fragment ShowParallaxBackdrop_show on TVShow {
  backdrop(size: Original)
}

fragment ShowRatingCircle_show on TVShow {
  status
  rating
  numberOfRatings
}

fragment ShowStreamingLinks_show on TVShow {
  streamingOptions {
    provider {
      __typename
    }
    ...StreamingLink_option
  }
}

fragment SimpleEpisodeCard_episode on Episode {
  ...EpisodeLinkContainer_episode
  still(size: W300)
  episodeNumber
  name
  overview
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

fragment useEpisodeAirDate_episode on Episode {
  airDate
}

fragment useShowAirDate_show on TVShow {
  firstAirDate
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
  "name": "name",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "overview",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
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
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seasonNumber",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "episodeNumber",
  "storageKey": null
},
v10 = [
  (v6/*: any*/),
  (v2/*: any*/),
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "airDate",
    "storageKey": null
  },
  (v5/*: any*/)
],
v11 = {
  "alias": "actor",
  "args": null,
  "concreteType": "Person",
  "kind": "LinkedField",
  "name": "value",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v2/*: any*/),
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
};
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "status",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rating",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "numberOfRatings",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "size",
                    "value": "W342"
                  }
                ],
                "kind": "ScalarField",
                "name": "poster",
                "storageKey": "poster(size:\"W342\")"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "episodeRunTime",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "firstAirDate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Genre",
                "kind": "LinkedField",
                "name": "genres",
                "plural": true,
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Network",
                "kind": "LinkedField",
                "name": "networks",
                "plural": true,
                "selections": (v3/*: any*/),
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
                      (v4/*: any*/),
                      (v2/*: any*/),
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
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Episode",
                "kind": "LinkedField",
                "name": "lastEpisodeToAir",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Episode",
                "kind": "LinkedField",
                "name": "nextEpisodeToAir",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Episode",
                "kind": "LinkedField",
                "name": "topRatedEpisode",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "credits",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CastCreditWithPerson",
                        "kind": "LinkedField",
                        "name": "cast",
                        "plural": true,
                        "selections": [
                          (v11/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "character",
                            "storageKey": null
                          }
                        ],
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
                          (v11/*: any*/),
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
                    "type": "CreditsWithPerson",
                    "abstractKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "size",
                    "value": "Original"
                  }
                ],
                "kind": "ScalarField",
                "name": "backdrop",
                "storageKey": "backdrop(size:\"Original\")"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Season",
                "kind": "LinkedField",
                "name": "seasons",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Episode",
                    "kind": "LinkedField",
                    "name": "episodes",
                    "plural": true,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v9/*: any*/),
                      (v2/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "36f2fc2403fdf759119c076d24c27f3a",
    "id": null,
    "metadata": {},
    "name": "DetailedShowViewQuery",
    "operationKind": "query",
    "text": "query DetailedShowViewQuery(\n  $id: ID!\n) {\n  tv {\n    show(id: $id) {\n      ...DetailedShowViewRoot_show\n      id\n    }\n  }\n}\n\nfragment CastCredit_credit on CastCreditWithPerson {\n  actor: value {\n    ...PersonLinkContainer_person\n    name\n    profilePicture(size: W185)\n    id\n  }\n  character\n}\n\nfragment Cast_credits on CreditsWithPerson {\n  cast {\n    ...CastCredit_credit\n  }\n}\n\nfragment CrewCredit_credit on CrewCreditWithPerson {\n  actor: value {\n    ...PersonLinkContainer_person\n    name\n    profilePicture(size: W185)\n    id\n  }\n  job\n}\n\nfragment Crew_credits on CreditsWithPerson {\n  crew {\n    ...CrewCredit_credit\n  }\n}\n\nfragment DetailedShowViewRoot_show on TVShow {\n  ...ShowHeader_show\n  ...ShowStreamingLinks_show\n  overview\n  lastEpisodeToAir {\n    ...FeaturedEpisodeCard_episode\n    id\n  }\n  nextEpisodeToAir {\n    ...FeaturedEpisodeCard_episode\n    id\n  }\n  topRatedEpisode {\n    ...FeaturedEpisodeCard_episode\n    id\n  }\n  credits {\n    __typename\n    ...Cast_credits\n    ...Crew_credits\n  }\n  ...ShowParallaxBackdrop_show\n  seasons {\n    ...SeasonRow_season\n    id\n  }\n}\n\nfragment EpisodeLinkContainer_episode on Episode {\n  id\n}\n\nfragment FeaturedEpisodeCard_episode on Episode {\n  ...EpisodeLinkContainer_episode\n  name\n  still(size: W300)\n  seasonNumber\n  episodeNumber\n  ...useEpisodeAirDate_episode\n  overview\n}\n\nfragment GenreTag_genre on Genre {\n  name\n}\n\nfragment PersonLinkContainer_person on Person {\n  id\n}\n\nfragment SeasonRow_season on Season {\n  seasonNumber\n  episodes {\n    ...SimpleEpisodeCard_episode\n    id\n  }\n}\n\nfragment ShowHeader_show on TVShow {\n  ...ShowRatingCircle_show\n  name\n  poster(size: W342)\n  episodeRunTime\n  ...useShowAirDate_show\n  genres {\n    ...GenreTag_genre\n  }\n  networks {\n    name\n  }\n}\n\nfragment ShowParallaxBackdrop_show on TVShow {\n  backdrop(size: Original)\n}\n\nfragment ShowRatingCircle_show on TVShow {\n  status\n  rating\n  numberOfRatings\n}\n\nfragment ShowStreamingLinks_show on TVShow {\n  streamingOptions {\n    provider {\n      __typename\n    }\n    ...StreamingLink_option\n  }\n}\n\nfragment SimpleEpisodeCard_episode on Episode {\n  ...EpisodeLinkContainer_episode\n  still(size: W300)\n  episodeNumber\n  name\n  overview\n}\n\nfragment StreamingLinkToolTip_option on StreamingOption {\n  provider {\n    name\n  }\n}\n\nfragment StreamingLink_option on StreamingOption {\n  ...StreamingLinkToolTip_option\n  provider {\n    iconURL\n  }\n  bestOffering {\n    links {\n      web\n    }\n    ...useStreamingLinkTitle_offering\n    ...useStreamingLinkPriceDescription_offering\n  }\n}\n\nfragment useEpisodeAirDate_episode on Episode {\n  airDate\n}\n\nfragment useShowAirDate_show on TVShow {\n  firstAirDate\n}\n\nfragment useStreamingLinkPriceDescription_offering on StreamingOptionOffering {\n  type\n  price {\n    amount\n    currency\n  }\n}\n\nfragment useStreamingLinkTitle_offering on StreamingOptionOffering {\n  type\n}\n"
  }
};
})();
(node as any).hash = 'facbe85e194eaab6f90cd69a2423c2de';
export default node;
