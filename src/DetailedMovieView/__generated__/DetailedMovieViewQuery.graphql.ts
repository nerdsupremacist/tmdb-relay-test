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
            readonly " $fragmentRefs": FragmentRefs<"DetailedMovieViewRoot_IMovie">;
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
      ...DetailedMovieViewRoot_IMovie
    }
  }
}

fragment CastCredit_CastCreditBasicPerson on CastCreditBasicPerson {
  value {
    __typename
    name
    profilePicture(size: W185)
  }
  character
}

fragment DetailedMovieViewRoot_IMovie on IMovie {
  __isIMovie: __typename
  title
  rating
  overview
  details {
    runtime
    tagline
    genres {
      ...GenreTag_Genre
    }
  }
  credits {
    __typename
    cast {
      ...CastCredit_CastCreditBasicPerson
    }
  }
  streamingOptions {
    ...StreamingLink_StreamingOption
  }
  poster(size: W185)
  backdrop(size: Original)
  recommendations {
    edges {
      node {
        __typename
        ...RelatedMovie_IMovie
      }
    }
  }
  similar {
    edges {
      node {
        __typename
        ...RelatedMovie_IMovie
      }
    }
  }
}

fragment GenreTag_Genre on Genre {
  name
}

fragment MovieLinkContainer_IMovie on IMovie {
  __isIMovie: __typename
  movieId: id
}

fragment RelatedMovie_IMovie on IMovie {
  __isIMovie: __typename
  ...MovieLinkContainer_IMovie
  title
  poster(size: W154)
}

fragment StreamingLink_StreamingOption on StreamingOption {
  provider {
    iconURL
  }
  bestOffering {
    links {
      web
    }
    ...useStreamingLinkTitle_StreamingOptionOffering
    ...useStreamingLinkPriceDescription_StreamingOptionOffering
  }
}

fragment useStreamingLinkPriceDescription_StreamingOptionOffering on StreamingOptionOffering {
  type
  price {
    amount
    currency
  }
}

fragment useStreamingLinkTitle_StreamingOptionOffering on StreamingOptionOffering {
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "size",
    "value": "W185"
  }
],
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
          (v4/*: any*/),
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
                "name": "DetailedMovieViewRoot_IMovie"
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
              (v4/*: any*/),
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
                "name": "overview",
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
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
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
                    "alias": null,
                    "args": null,
                    "concreteType": "CastCreditBasicPerson",
                    "kind": "LinkedField",
                    "name": "cast",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "value",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": (v6/*: any*/),
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
                "args": (v6/*: any*/),
                "kind": "ScalarField",
                "name": "poster",
                "storageKey": "poster(size:\"W185\")"
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
    "cacheID": "dabdd5c1baef569159990fbe16219875",
    "id": null,
    "metadata": {},
    "name": "DetailedMovieViewQuery",
    "operationKind": "query",
    "text": "query DetailedMovieViewQuery(\n  $id: Int!\n) {\n  movies {\n    movie(id: $id) {\n      __typename\n      ...DetailedMovieViewRoot_IMovie\n    }\n  }\n}\n\nfragment CastCredit_CastCreditBasicPerson on CastCreditBasicPerson {\n  value {\n    __typename\n    name\n    profilePicture(size: W185)\n  }\n  character\n}\n\nfragment DetailedMovieViewRoot_IMovie on IMovie {\n  __isIMovie: __typename\n  title\n  rating\n  overview\n  details {\n    runtime\n    tagline\n    genres {\n      ...GenreTag_Genre\n    }\n  }\n  credits {\n    __typename\n    cast {\n      ...CastCredit_CastCreditBasicPerson\n    }\n  }\n  streamingOptions {\n    ...StreamingLink_StreamingOption\n  }\n  poster(size: W185)\n  backdrop(size: Original)\n  recommendations {\n    edges {\n      node {\n        __typename\n        ...RelatedMovie_IMovie\n      }\n    }\n  }\n  similar {\n    edges {\n      node {\n        __typename\n        ...RelatedMovie_IMovie\n      }\n    }\n  }\n}\n\nfragment GenreTag_Genre on Genre {\n  name\n}\n\nfragment MovieLinkContainer_IMovie on IMovie {\n  __isIMovie: __typename\n  movieId: id\n}\n\nfragment RelatedMovie_IMovie on IMovie {\n  __isIMovie: __typename\n  ...MovieLinkContainer_IMovie\n  title\n  poster(size: W154)\n}\n\nfragment StreamingLink_StreamingOption on StreamingOption {\n  provider {\n    iconURL\n  }\n  bestOffering {\n    links {\n      web\n    }\n    ...useStreamingLinkTitle_StreamingOptionOffering\n    ...useStreamingLinkPriceDescription_StreamingOptionOffering\n  }\n}\n\nfragment useStreamingLinkPriceDescription_StreamingOptionOffering on StreamingOptionOffering {\n  type\n  price {\n    amount\n    currency\n  }\n}\n\nfragment useStreamingLinkTitle_StreamingOptionOffering on StreamingOptionOffering {\n  type\n}\n"
  }
};
})();
(node as any).hash = '19545ad8e8ef89faadb34069858998b0';
export default node;
