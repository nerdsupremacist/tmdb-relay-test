/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailedPersonViewQueryVariables = {
    id: string;
};
export type DetailedPersonViewQueryResponse = {
    readonly people: {
        readonly person: {
            readonly " $fragmentRefs": FragmentRefs<"DetailedPersonViewRoot_person">;
        };
    };
};
export type DetailedPersonViewQuery = {
    readonly response: DetailedPersonViewQueryResponse;
    readonly variables: DetailedPersonViewQueryVariables;
};



/*
query DetailedPersonViewQuery(
  $id: ID!
) {
  people {
    person(id: $id) {
      ...DetailedPersonViewRoot_person
      id
    }
  }
}

fragment AdditionalCredits_person on Person {
  ...useIsActor_person
  credits {
    all {
      cast {
        ...CastCreditForPerson_credit
      }
      crew {
        ...CrewCreditForPerson_credit
      }
    }
  }
}

fragment CastCreditForPerson_credit on CastCreditWithMovieOrTV {
  character
  value {
    __typename
    ... on Movie {
      ...LinkContainer_node
      title
      poster(size: W185)
    }
    ... on TVShow {
      ...LinkContainer_node
      name
      poster(size: W185)
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment CrewCreditForPerson_credit on CrewCreditWithMovieOrTV {
  job
  value {
    __typename
    ...LinkContainer_node
    ... on Movie {
      title
      poster(size: W185)
    }
    ... on TVShow {
      name
      poster(size: W185)
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}

fragment DetailedPersonViewRoot_person on Person {
  ...PersonHeader_person
  biography
  ...KnownForList_person
  ...AdditionalCredits_person
}

fragment KnownForList_person on Person {
  ...useIsActor_person
  knownFor {
    __typename
    ...MovieOrShowResult_result
    ... on Node {
      __isNode: __typename
      id
    }
  }
  credits {
    all {
      cast {
        ...CastCreditForPerson_credit
      }
      crew {
        ...CrewCreditForPerson_credit
      }
    }
  }
}

fragment LinkContainer_node on Node {
  __isNode: __typename
  ...routes_usePathLink_node
}

fragment MovieListItem_movie on Movie {
  ...LinkContainer_node
  title
  poster(size: W154)
}

fragment MovieOrShowResult_result on MovieOrTV {
  __isMovieOrTV: __typename
  __typename
  ... on Movie {
    ...MovieListItem_movie
  }
  ... on TVShow {
    ...ShowListItem_show
  }
}

fragment PersonHeader_person on Person {
  name
  profilePicture(size: W185)
  knownForDepartment
  placeOfBirth
  homepage
  externalIds {
    imdb
    facebook
    instagram
    twitter
  }
}

fragment ShowListItem_show on TVShow {
  ...LinkContainer_node
  name
  poster(size: W154)
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

fragment useIsActor_person on Person {
  knownForDepartment
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
  {
    "kind": "Literal",
    "name": "size",
    "value": "W185"
  }
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
  "name": "title",
  "storageKey": null
},
v6 = {
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
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "kind": "InlineFragment",
  "selections": [
    (v7/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v9 = {
  "alias": null,
  "args": (v3/*: any*/),
  "kind": "ScalarField",
  "name": "poster",
  "storageKey": "poster(size:\"W185\")"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DetailedPersonViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "People",
        "kind": "LinkedField",
        "name": "people",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Person",
            "kind": "LinkedField",
            "name": "person",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "DetailedPersonViewRoot_person"
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
    "name": "DetailedPersonViewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "People",
        "kind": "LinkedField",
        "name": "people",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "Person",
            "kind": "LinkedField",
            "name": "person",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": (v3/*: any*/),
                "kind": "ScalarField",
                "name": "profilePicture",
                "storageKey": "profilePicture(size:\"W185\")"
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "knownForDepartment",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "placeOfBirth",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "homepage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "ExternalIDS",
                "kind": "LinkedField",
                "name": "externalIds",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "imdb",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "facebook",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "instagram",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "twitter",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "biography",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "knownFor",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isMovieOrTV"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v8/*: any*/)
                    ],
                    "type": "Movie",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      (v6/*: any*/),
                      (v8/*: any*/)
                    ],
                    "type": "TVShow",
                    "abstractKey": null
                  },
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PersonCredits",
                "kind": "LinkedField",
                "name": "credits",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CreditsWithMovieOrTV",
                    "kind": "LinkedField",
                    "name": "all",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CastCreditWithMovieOrTV",
                        "kind": "LinkedField",
                        "name": "cast",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "character",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "value",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v5/*: any*/),
                                  (v9/*: any*/),
                                  (v8/*: any*/)
                                ],
                                "type": "Movie",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v2/*: any*/),
                                  (v9/*: any*/),
                                  (v8/*: any*/)
                                ],
                                "type": "TVShow",
                                "abstractKey": null
                              },
                              (v8/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CrewCreditWithMovieOrTV",
                        "kind": "LinkedField",
                        "name": "crew",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "job",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "value",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              (v8/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v5/*: any*/),
                                  (v9/*: any*/)
                                ],
                                "type": "Movie",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v2/*: any*/),
                                  (v9/*: any*/)
                                ],
                                "type": "TVShow",
                                "abstractKey": null
                              }
                            ],
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
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6b14190429b92cd15ab28adac4301ebe",
    "id": null,
    "metadata": {},
    "name": "DetailedPersonViewQuery",
    "operationKind": "query",
    "text": "query DetailedPersonViewQuery(\n  $id: ID!\n) {\n  people {\n    person(id: $id) {\n      ...DetailedPersonViewRoot_person\n      id\n    }\n  }\n}\n\nfragment AdditionalCredits_person on Person {\n  ...useIsActor_person\n  credits {\n    all {\n      cast {\n        ...CastCreditForPerson_credit\n      }\n      crew {\n        ...CrewCreditForPerson_credit\n      }\n    }\n  }\n}\n\nfragment CastCreditForPerson_credit on CastCreditWithMovieOrTV {\n  character\n  value {\n    __typename\n    ... on Movie {\n      ...LinkContainer_node\n      title\n      poster(size: W185)\n    }\n    ... on TVShow {\n      ...LinkContainer_node\n      name\n      poster(size: W185)\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment CrewCreditForPerson_credit on CrewCreditWithMovieOrTV {\n  job\n  value {\n    __typename\n    ...LinkContainer_node\n    ... on Movie {\n      title\n      poster(size: W185)\n    }\n    ... on TVShow {\n      name\n      poster(size: W185)\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment DetailedPersonViewRoot_person on Person {\n  ...PersonHeader_person\n  biography\n  ...KnownForList_person\n  ...AdditionalCredits_person\n}\n\nfragment KnownForList_person on Person {\n  ...useIsActor_person\n  knownFor {\n    __typename\n    ...MovieOrShowResult_result\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  credits {\n    all {\n      cast {\n        ...CastCreditForPerson_credit\n      }\n      crew {\n        ...CrewCreditForPerson_credit\n      }\n    }\n  }\n}\n\nfragment LinkContainer_node on Node {\n  __isNode: __typename\n  ...routes_usePathLink_node\n}\n\nfragment MovieListItem_movie on Movie {\n  ...LinkContainer_node\n  title\n  poster(size: W154)\n}\n\nfragment MovieOrShowResult_result on MovieOrTV {\n  __isMovieOrTV: __typename\n  __typename\n  ... on Movie {\n    ...MovieListItem_movie\n  }\n  ... on TVShow {\n    ...ShowListItem_show\n  }\n}\n\nfragment PersonHeader_person on Person {\n  name\n  profilePicture(size: W185)\n  knownForDepartment\n  placeOfBirth\n  homepage\n  externalIds {\n    imdb\n    facebook\n    instagram\n    twitter\n  }\n}\n\nfragment ShowListItem_show on TVShow {\n  ...LinkContainer_node\n  name\n  poster(size: W154)\n}\n\nfragment routes_usePathLink_node on Node {\n  __isNode: __typename\n  ...routes_usePathLinks_nodes\n}\n\nfragment routes_usePathLinks_nodes on Node {\n  __isNode: __typename\n  __typename\n  id\n}\n\nfragment useIsActor_person on Person {\n  knownForDepartment\n}\n"
  }
};
})();
(node as any).hash = 'd8fbdbb02d00be8c295d60b649211271';
export default node;
