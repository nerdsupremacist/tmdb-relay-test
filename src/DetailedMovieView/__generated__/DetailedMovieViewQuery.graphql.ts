/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type DetailedMovieViewQueryVariables = {
    id: string;
};
export type DetailedMovieViewQueryResponse = {
    readonly movies: {
        readonly movie: {
            readonly " $fragmentRefs": FragmentRefs<"DetailedMovieViewRoot_movie">;
        };
    };
};
export type DetailedMovieViewQuery = {
    readonly response: DetailedMovieViewQueryResponse;
    readonly variables: DetailedMovieViewQueryVariables;
};



/*
query DetailedMovieViewQuery(
  $id: ID!
) {
  movies {
    movie(id: $id) {
      ...DetailedMovieViewRoot_movie
      id
    }
  }
}

fragment CastCredit_credit on CastCreditWithPerson {
  actor: value {
    ...LinkContainer_node
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
    ...LinkContainer_node
    name
    profilePicture(size: W185)
    id
  }
  job
}

fragment Crew_credits on CrewCreditWithPerson {
  ...CrewCredit_credit
}

fragment DetailedMovieViewRoot_movie on Movie {
  id
  ...MovieHeader_movie
  streamingOptions {
    ...StreamingLinks_links
  }
  overview
  credits {
    __typename
    cast {
      ...Cast_credits
    }
    crew {
      ...Crew_credits
    }
  }
  videos {
    ...Videos_videos
  }
  ...MovieParallaxBackdrop_movie
  ...SimilarMovieList_movie_42LEEo
  ...RecommendedMovieList_movie_42LEEo
}

fragment GenreTag_genre on Genre {
  name
}

fragment LinkContainer_node on Node {
  __isNode: __typename
  ...routes_usePathLink_node
}

fragment MovieHeader_movie on Movie {
  poster(size: W342)
  title
  ...MovieRatingCircle_movie
  ...useMovieStatus_movie
  ...useMovieReleaseDate_movie
  runtime
  tagline
  genres {
    ...GenreTag_genre
    id
  }
  productionCompanies {
    name
    id
  }
}

fragment MovieListItem_movie on Movie {
  ...LinkContainer_node
  title
  poster(size: W154)
}

fragment MovieParallaxBackdrop_movie on Movie {
  backdrop(size: Original)
}

fragment MovieRatingCircle_movie on Movie {
  rating
  numberOfRatings
  status
}

fragment RecommendedMovieList_movie_42LEEo on Movie {
  recommendations(first: 20) {
    totalCount
    edges {
      node {
        ...MovieListItem_movie
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}

fragment SimilarMovieList_movie_42LEEo on Movie {
  similar(first: 20) {
    totalCount
    edges {
      node {
        ...MovieListItem_movie
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}

fragment StreamingLinkToolTip_option on StreamingOption {
  provider {
    name
    id
  }
}

fragment StreamingLink_option on StreamingOption {
  ...StreamingLinkToolTip_option
  provider {
    iconURL
    id
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
    id
  }
  ...StreamingLink_option
}

fragment VideoCard_video on Video {
  thumbnail
  name
  type
  site
  key
}

fragment Videos_videos on Video {
  ...VideoCard_video
}

fragment routes_usePathLink_node on Node {
  __isNode: __typename
  ...routes_usePathLinks_nodes
}

fragment routes_usePathLinks_nodes on Node {
  __isNode: __typename
  __typename
  id
}

fragment useMovieReleaseDate_movie on Movie {
  releaseDate
}

fragment useMovieStatus_movie on Movie {
  status
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
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  (v4/*: any*/),
  (v2/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v8 = {
  "alias": "actor",
  "args": null,
  "concreteType": "Person",
  "kind": "LinkedField",
  "name": "value",
  "plural": false,
  "selections": [
    (v4/*: any*/),
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
    },
    (v2/*: any*/),
    {
      "kind": "InlineFragment",
      "selections": [
        (v6/*: any*/)
      ],
      "type": "Node",
      "abstractKey": "__isNode"
    }
  ],
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v10 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "MovieEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": "W154"
              }
            ],
            "kind": "ScalarField",
            "name": "poster",
            "storageKey": "poster(size:\"W154\")"
          },
          (v2/*: any*/),
          (v6/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DetailedMovieViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Movies",
        "kind": "LinkedField",
        "name": "movies",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Movie",
            "kind": "LinkedField",
            "name": "movie",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DetailedMovieViewRoot_movie"
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
    "name": "DetailedMovieViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Movies",
        "kind": "LinkedField",
        "name": "movies",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Movie",
            "kind": "LinkedField",
            "name": "movie",
            "plural": false,
            "selections": [
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
              (v3/*: any*/),
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
                "name": "releaseDate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "runtime",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "tagline",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Genre",
                "kind": "LinkedField",
                "name": "genres",
                "plural": true,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ProductionCompany",
                "kind": "LinkedField",
                "name": "productionCompanies",
                "plural": true,
                "selections": (v5/*: any*/),
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
                      (v6/*: any*/),
                      (v2/*: any*/),
                      (v4/*: any*/),
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
                      (v7/*: any*/),
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
                "concreteType": null,
                "kind": "LinkedField",
                "name": "credits",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CastCreditWithPerson",
                    "kind": "LinkedField",
                    "name": "cast",
                    "plural": true,
                    "selections": [
                      (v8/*: any*/),
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
                      (v8/*: any*/),
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
              {
                "alias": null,
                "args": null,
                "concreteType": "Video",
                "kind": "LinkedField",
                "name": "videos",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "thumbnail",
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "site",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "key",
                    "storageKey": null
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
                "args": (v9/*: any*/),
                "concreteType": "MovieConnection",
                "kind": "LinkedField",
                "name": "similar",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": "similar(first:20)"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "SimilarMovieList_similar",
                "kind": "LinkedHandle",
                "name": "similar"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "concreteType": "MovieConnection",
                "kind": "LinkedField",
                "name": "recommendations",
                "plural": false,
                "selections": (v10/*: any*/),
                "storageKey": "recommendations(first:20)"
              },
              {
                "alias": null,
                "args": (v9/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "RecommendedMovieList_recommendations",
                "kind": "LinkedHandle",
                "name": "recommendations"
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
    "cacheID": "24caa034fecdb8814a31493474e46583",
    "id": null,
    "metadata": {},
    "name": "DetailedMovieViewQuery",
    "operationKind": "query",
    "text": "query DetailedMovieViewQuery(\n  $id: ID!\n) {\n  movies {\n    movie(id: $id) {\n      ...DetailedMovieViewRoot_movie\n      id\n    }\n  }\n}\n\nfragment CastCredit_credit on CastCreditWithPerson {\n  actor: value {\n    ...LinkContainer_node\n    name\n    profilePicture(size: W185)\n    id\n  }\n  character\n}\n\nfragment Cast_credits on CastCreditWithPerson {\n  ...CastCredit_credit\n}\n\nfragment CrewCredit_credit on CrewCreditWithPerson {\n  actor: value {\n    ...LinkContainer_node\n    name\n    profilePicture(size: W185)\n    id\n  }\n  job\n}\n\nfragment Crew_credits on CrewCreditWithPerson {\n  ...CrewCredit_credit\n}\n\nfragment DetailedMovieViewRoot_movie on Movie {\n  id\n  ...MovieHeader_movie\n  streamingOptions {\n    ...StreamingLinks_links\n  }\n  overview\n  credits {\n    __typename\n    cast {\n      ...Cast_credits\n    }\n    crew {\n      ...Crew_credits\n    }\n  }\n  videos {\n    ...Videos_videos\n  }\n  ...MovieParallaxBackdrop_movie\n  ...SimilarMovieList_movie_42LEEo\n  ...RecommendedMovieList_movie_42LEEo\n}\n\nfragment GenreTag_genre on Genre {\n  name\n}\n\nfragment LinkContainer_node on Node {\n  __isNode: __typename\n  ...routes_usePathLink_node\n}\n\nfragment MovieHeader_movie on Movie {\n  poster(size: W342)\n  title\n  ...MovieRatingCircle_movie\n  ...useMovieStatus_movie\n  ...useMovieReleaseDate_movie\n  runtime\n  tagline\n  genres {\n    ...GenreTag_genre\n    id\n  }\n  productionCompanies {\n    name\n    id\n  }\n}\n\nfragment MovieListItem_movie on Movie {\n  ...LinkContainer_node\n  title\n  poster(size: W154)\n}\n\nfragment MovieParallaxBackdrop_movie on Movie {\n  backdrop(size: Original)\n}\n\nfragment MovieRatingCircle_movie on Movie {\n  rating\n  numberOfRatings\n  status\n}\n\nfragment RecommendedMovieList_movie_42LEEo on Movie {\n  recommendations(first: 20) {\n    totalCount\n    edges {\n      node {\n        ...MovieListItem_movie\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment SimilarMovieList_movie_42LEEo on Movie {\n  similar(first: 20) {\n    totalCount\n    edges {\n      node {\n        ...MovieListItem_movie\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment StreamingLinkToolTip_option on StreamingOption {\n  provider {\n    name\n    id\n  }\n}\n\nfragment StreamingLink_option on StreamingOption {\n  ...StreamingLinkToolTip_option\n  provider {\n    iconURL\n    id\n  }\n  bestOffering {\n    links {\n      web\n    }\n    ...useStreamingLinkTitle_offering\n    ...useStreamingLinkPriceDescription_offering\n  }\n}\n\nfragment StreamingLinks_links on StreamingOption {\n  provider {\n    __typename\n    id\n  }\n  ...StreamingLink_option\n}\n\nfragment VideoCard_video on Video {\n  thumbnail\n  name\n  type\n  site\n  key\n}\n\nfragment Videos_videos on Video {\n  ...VideoCard_video\n}\n\nfragment routes_usePathLink_node on Node {\n  __isNode: __typename\n  ...routes_usePathLinks_nodes\n}\n\nfragment routes_usePathLinks_nodes on Node {\n  __isNode: __typename\n  __typename\n  id\n}\n\nfragment useMovieReleaseDate_movie on Movie {\n  releaseDate\n}\n\nfragment useMovieStatus_movie on Movie {\n  status\n}\n\nfragment useStreamingLinkPriceDescription_offering on StreamingOptionOffering {\n  type\n  price {\n    amount\n    currency\n  }\n}\n\nfragment useStreamingLinkTitle_offering on StreamingOptionOffering {\n  type\n}\n"
  }
};
})();
(node as any).hash = 'b626d7915a0ec16d7bbd0090a51921da';
export default node;
