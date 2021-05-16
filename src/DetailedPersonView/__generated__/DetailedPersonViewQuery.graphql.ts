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

fragment CastCreditForPerson_credit on CastCreditWithMovieOrTV {
  character
  value {
    __typename
    ... on Movie {
      ...MovieLinkContainer_movie
      title
      poster(size: W185)
    }
    ... on TVShow {
      ...ShowLinkContainer_show
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
}

fragment KnownForList_person on Person {
  knownForDepartment
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
    }
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
  externalIds {
    imdb
    facebook
    instagram
    twitter
  }
}

fragment ShowLinkContainer_show on TVShow {
  id
}

fragment ShowListItem_show on TVShow {
  ...ShowLinkContainer_show
  name
  poster(size: W154)
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
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v7 = {
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
v8 = {
  "kind": "InlineFragment",
  "selections": [
    (v5/*: any*/)
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
                      (v7/*: any*/)
                    ],
                    "type": "Movie",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v5/*: any*/),
                      (v2/*: any*/),
                      (v7/*: any*/)
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
                                  (v6/*: any*/),
                                  (v9/*: any*/)
                                ],
                                "type": "Movie",
                                "abstractKey": null
                              },
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  (v5/*: any*/),
                                  (v2/*: any*/),
                                  (v9/*: any*/)
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "89f95cd1a48bef41dc5556577e21abeb",
    "id": null,
    "metadata": {},
    "name": "DetailedPersonViewQuery",
    "operationKind": "query",
    "text": "query DetailedPersonViewQuery(\n  $id: ID!\n) {\n  people {\n    person(id: $id) {\n      ...DetailedPersonViewRoot_person\n      id\n    }\n  }\n}\n\nfragment CastCreditForPerson_credit on CastCreditWithMovieOrTV {\n  character\n  value {\n    __typename\n    ... on Movie {\n      ...MovieLinkContainer_movie\n      title\n      poster(size: W185)\n    }\n    ... on TVShow {\n      ...ShowLinkContainer_show\n      name\n      poster(size: W185)\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment DetailedPersonViewRoot_person on Person {\n  ...PersonHeader_person\n  biography\n  ...KnownForList_person\n}\n\nfragment KnownForList_person on Person {\n  knownForDepartment\n  knownFor {\n    __typename\n    ...MovieOrShowResult_result\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  credits {\n    all {\n      cast {\n        ...CastCreditForPerson_credit\n      }\n    }\n  }\n}\n\nfragment MovieLinkContainer_movie on Movie {\n  id\n}\n\nfragment MovieListItem_movie on Movie {\n  ...MovieLinkContainer_movie\n  title\n  poster(size: W154)\n}\n\nfragment MovieOrShowResult_result on MovieOrTV {\n  __isMovieOrTV: __typename\n  __typename\n  ... on Movie {\n    ...MovieListItem_movie\n  }\n  ... on TVShow {\n    ...ShowListItem_show\n  }\n}\n\nfragment PersonHeader_person on Person {\n  name\n  profilePicture(size: W185)\n  knownForDepartment\n  placeOfBirth\n  externalIds {\n    imdb\n    facebook\n    instagram\n    twitter\n  }\n}\n\nfragment ShowLinkContainer_show on TVShow {\n  id\n}\n\nfragment ShowListItem_show on TVShow {\n  ...ShowLinkContainer_show\n  name\n  poster(size: W154)\n}\n"
  }
};
})();
(node as any).hash = 'd8fbdbb02d00be8c295d60b649211271';
export default node;
