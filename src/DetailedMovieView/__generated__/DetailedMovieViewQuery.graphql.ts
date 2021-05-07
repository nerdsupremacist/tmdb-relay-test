/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedMovieViewQueryVariables = {
    id: number;
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
  $id: Int!
) {
  movies {
    movie(id: $id) {
      __typename
      ...DetailedMovieViewRoot_movie
    }
  }
}

fragment CastCredit_credit on CastCreditBasicPerson {
  actor: value {
    __typename
    name
    profilePicture(size: W185)
  }
  character
}

fragment Cast_credits on ICreditsBasicPerson {
  __isICreditsBasicPerson: __typename
  cast {
    ...CastCredit_credit
  }
}

fragment DetailedMovieViewRoot_movie on IMovie {
  __isIMovie: __typename
  ...MovieHeader_movie
  ...MovieStreamingLinks_movie
  overview
  credits {
    __typename
    ...Cast_credits
  }
  ...MovieParallaxBackdrop_movie
  recommendations {
    ...RelatedMovieList_connection
  }
  similar {
    ...RelatedMovieList_connection
  }
}

fragment GenreTag_genre on Genre {
  name
}

fragment MovieHeader_movie on IMovie {
  __isIMovie: __typename
  poster(size: W185)
  title
  rating
  details {
    runtime
    tagline
    genres {
      ...GenreTag_genre
    }
  }
}

fragment MovieLinkContainer_movie on IMovie {
  __isIMovie: __typename
  movieId: id
}

fragment MovieParallaxBackdrop_movie on IMovie {
  __isIMovie: __typename
  backdrop(size: Original)
}

fragment MovieStreamingLinks_movie on IMovie {
  __isIMovie: __typename
  streamingOptions {
    ...StreamingLink_option
  }
}

fragment RelatedMovieList_connection on MovieConnection {
  edges {
    node {
      __typename
      ...RelatedMovie_movie
    }
  }
}

fragment RelatedMovie_movie on IMovie {
  __isIMovie: __typename
  ...MovieLinkContainer_movie
  title
  poster(size: W154)
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
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "kind": "TypeDiscriminator",
  "abstractKey": "__isIMovie"
},
v4 = [
  {
    "kind": "Literal",
    "name": "size",
    "value": "W185"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = [
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
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": "movieId",
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          (v5/*: any*/),
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
          }
        ],
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
            "concreteType": null,
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
            "concreteType": null,
            "kind": "LinkedField",
            "name": "movie",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": (v4/*: any*/),
                "kind": "ScalarField",
                "name": "poster",
                "storageKey": "poster(size:\"W185\")"
              },
              (v5/*: any*/),
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
                "concreteType": "DetailedMovie",
                "kind": "LinkedField",
                "name": "details",
                "plural": false,
                "selections": [
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
                      (v6/*: any*/)
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
                      (v6/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isICreditsBasicPerson"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CastCreditBasicPerson",
                    "kind": "LinkedField",
                    "name": "cast",
                    "plural": true,
                    "selections": [
                      {
                        "alias": "actor",
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "value",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": (v4/*: any*/),
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
                "concreteType": "MovieConnection",
                "kind": "LinkedField",
                "name": "recommendations",
                "plural": false,
                "selections": (v7/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "MovieConnection",
                "kind": "LinkedField",
                "name": "similar",
                "plural": false,
                "selections": (v7/*: any*/),
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
    "cacheID": "4bafe3230aa20667b5d59d52e05883d7",
    "id": null,
    "metadata": {},
    "name": "DetailedMovieViewQuery",
    "operationKind": "query",
    "text": "query DetailedMovieViewQuery(\n  $id: Int!\n) {\n  movies {\n    movie(id: $id) {\n      __typename\n      ...DetailedMovieViewRoot_movie\n    }\n  }\n}\n\nfragment CastCredit_credit on CastCreditBasicPerson {\n  actor: value {\n    __typename\n    name\n    profilePicture(size: W185)\n  }\n  character\n}\n\nfragment Cast_credits on ICreditsBasicPerson {\n  __isICreditsBasicPerson: __typename\n  cast {\n    ...CastCredit_credit\n  }\n}\n\nfragment DetailedMovieViewRoot_movie on IMovie {\n  __isIMovie: __typename\n  ...MovieHeader_movie\n  ...MovieStreamingLinks_movie\n  overview\n  credits {\n    __typename\n    ...Cast_credits\n  }\n  ...MovieParallaxBackdrop_movie\n  recommendations {\n    ...RelatedMovieList_connection\n  }\n  similar {\n    ...RelatedMovieList_connection\n  }\n}\n\nfragment GenreTag_genre on Genre {\n  name\n}\n\nfragment MovieHeader_movie on IMovie {\n  __isIMovie: __typename\n  poster(size: W185)\n  title\n  rating\n  details {\n    runtime\n    tagline\n    genres {\n      ...GenreTag_genre\n    }\n  }\n}\n\nfragment MovieLinkContainer_movie on IMovie {\n  __isIMovie: __typename\n  movieId: id\n}\n\nfragment MovieParallaxBackdrop_movie on IMovie {\n  __isIMovie: __typename\n  backdrop(size: Original)\n}\n\nfragment MovieStreamingLinks_movie on IMovie {\n  __isIMovie: __typename\n  streamingOptions {\n    ...StreamingLink_option\n  }\n}\n\nfragment RelatedMovieList_connection on MovieConnection {\n  edges {\n    node {\n      __typename\n      ...RelatedMovie_movie\n    }\n  }\n}\n\nfragment RelatedMovie_movie on IMovie {\n  __isIMovie: __typename\n  ...MovieLinkContainer_movie\n  title\n  poster(size: W154)\n}\n\nfragment StreamingLinkToolTip_option on StreamingOption {\n  provider {\n    name\n  }\n}\n\nfragment StreamingLink_option on StreamingOption {\n  ...StreamingLinkToolTip_option\n  provider {\n    iconURL\n  }\n  bestOffering {\n    links {\n      web\n    }\n    ...useStreamingLinkTitle_offering\n    ...useStreamingLinkPriceDescription_offering\n  }\n}\n\nfragment useStreamingLinkPriceDescription_offering on StreamingOptionOffering {\n  type\n  price {\n    amount\n    currency\n  }\n}\n\nfragment useStreamingLinkTitle_offering on StreamingOptionOffering {\n  type\n}\n"
  }
};
})();
(node as any).hash = 'c3e875e35beb07de05a6fd14ac2633fc';
export default node;
