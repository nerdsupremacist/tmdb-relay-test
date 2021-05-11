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

fragment DetailedMovieViewRoot_movie on Movie {
  ...MovieHeader_movie
  ...MovieStreamingLinks_movie
  overview
  credits {
    __typename
    ...Cast_credits
  }
  ...MovieParallaxBackdrop_movie
  ...SimilarMovieList_movie_42LEEo
}

fragment GenreTag_genre on Genre {
  name
}

fragment MovieHeader_movie on Movie {
  poster(size: W185)
  title
  rating
  ...useMovieReleaseDate_movie
  runtime
  tagline
  genres {
    ...GenreTag_genre
  }
}

fragment MovieLinkContainer_movie on Movie {
  id
}

fragment MovieListItem_movie on Movie {
  ...MovieLinkContainer_movie
  title
  poster(size: W154)
}

fragment MovieParallaxBackdrop_movie on Movie {
  backdrop(size: Original)
}

fragment MovieStreamingLinks_movie on Movie {
  streamingOptions {
    ...StreamingLink_option
  }
}

fragment PersonLinkContainer_person on Person {
  id
}

fragment SimilarMovieList_movie_42LEEo on Movie {
  similar(first: 20) {
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

fragment useMovieReleaseDate_movie on Movie {
  releaseDate
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
v2 = [
  {
    "kind": "Literal",
    "name": "size",
    "value": "W185"
  }
],
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
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
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
              {
                "alias": null,
                "args": (v2/*: any*/),
                "kind": "ScalarField",
                "name": "poster",
                "storageKey": "poster(size:\"W185\")"
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
                "selections": [
                  (v4/*: any*/)
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
                "concreteType": null,
                "kind": "LinkedField",
                "name": "credits",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
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
                          {
                            "alias": "actor",
                            "args": null,
                            "concreteType": "Person",
                            "kind": "LinkedField",
                            "name": "value",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/),
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": (v2/*: any*/),
                                "kind": "ScalarField",
                                "name": "profilePicture",
                                "storageKey": "profilePicture(size:\"W185\")"
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "character",
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
                "args": (v7/*: any*/),
                "concreteType": "MovieConnection",
                "kind": "LinkedField",
                "name": "similar",
                "plural": false,
                "selections": [
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
                          (v6/*: any*/),
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
                          (v5/*: any*/)
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
                ],
                "storageKey": "similar(first:20)"
              },
              {
                "alias": null,
                "args": (v7/*: any*/),
                "filters": [],
                "handle": "connection",
                "key": "SimilarMovieList_similar",
                "kind": "LinkedHandle",
                "name": "similar"
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
    "cacheID": "916383438b74d10c54f15ea2635d14fa",
    "id": null,
    "metadata": {},
    "name": "DetailedMovieViewQuery",
    "operationKind": "query",
    "text": "query DetailedMovieViewQuery(\n  $id: ID!\n) {\n  movies {\n    movie(id: $id) {\n      ...DetailedMovieViewRoot_movie\n      id\n    }\n  }\n}\n\nfragment CastCredit_credit on CastCreditWithPerson {\n  actor: value {\n    ...PersonLinkContainer_person\n    name\n    profilePicture(size: W185)\n    id\n  }\n  character\n}\n\nfragment Cast_credits on CreditsWithPerson {\n  cast {\n    ...CastCredit_credit\n  }\n}\n\nfragment DetailedMovieViewRoot_movie on Movie {\n  ...MovieHeader_movie\n  ...MovieStreamingLinks_movie\n  overview\n  credits {\n    __typename\n    ...Cast_credits\n  }\n  ...MovieParallaxBackdrop_movie\n  ...SimilarMovieList_movie_42LEEo\n}\n\nfragment GenreTag_genre on Genre {\n  name\n}\n\nfragment MovieHeader_movie on Movie {\n  poster(size: W185)\n  title\n  rating\n  ...useMovieReleaseDate_movie\n  runtime\n  tagline\n  genres {\n    ...GenreTag_genre\n  }\n}\n\nfragment MovieLinkContainer_movie on Movie {\n  id\n}\n\nfragment MovieListItem_movie on Movie {\n  ...MovieLinkContainer_movie\n  title\n  poster(size: W154)\n}\n\nfragment MovieParallaxBackdrop_movie on Movie {\n  backdrop(size: Original)\n}\n\nfragment MovieStreamingLinks_movie on Movie {\n  streamingOptions {\n    ...StreamingLink_option\n  }\n}\n\nfragment PersonLinkContainer_person on Person {\n  id\n}\n\nfragment SimilarMovieList_movie_42LEEo on Movie {\n  similar(first: 20) {\n    edges {\n      node {\n        ...MovieListItem_movie\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment StreamingLinkToolTip_option on StreamingOption {\n  provider {\n    name\n  }\n}\n\nfragment StreamingLink_option on StreamingOption {\n  ...StreamingLinkToolTip_option\n  provider {\n    iconURL\n  }\n  bestOffering {\n    links {\n      web\n    }\n    ...useStreamingLinkTitle_offering\n    ...useStreamingLinkPriceDescription_offering\n  }\n}\n\nfragment useMovieReleaseDate_movie on Movie {\n  releaseDate\n}\n\nfragment useStreamingLinkPriceDescription_offering on StreamingOptionOffering {\n  type\n  price {\n    amount\n    currency\n  }\n}\n\nfragment useStreamingLinkTitle_offering on StreamingOptionOffering {\n  type\n}\n"
  }
};
})();
(node as any).hash = 'b626d7915a0ec16d7bbd0090a51921da';
export default node;
