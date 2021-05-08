/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchResultsListQueryVariables = {
    term: string;
};
export type SearchResultsListQueryResponse = {
    readonly search: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"SearchResult_result">;
            } | null;
        } | null> | null;
    };
};
export type SearchResultsListQuery = {
    readonly response: SearchResultsListQueryResponse;
    readonly variables: SearchResultsListQueryVariables;
};



/*
query SearchResultsListQuery(
  $term: String!
) {
  search(term: $term, first: 5) {
    edges {
      node {
        __typename
        ...SearchResult_result
      }
    }
  }
}

fragment MovieLinkContainer_movie on IMovie {
  __isIMovie: __typename
  movieId: id
}

fragment MovieSearchResult_movie on IMovie {
  __isIMovie: __typename
  ...MovieLinkContainer_movie
  title
  overview
  poster(size: W185)
}

fragment PersonLinkContainer_person on IBasicPerson {
  __isIBasicPerson: __typename
  personId: id
}

fragment PersonSearchResult_person on IPerson {
  __isIPerson: __typename
  ...PersonLinkContainer_person
  name
  profilePicture(size: W185)
  ...useKnownForDescription_person
}

fragment SearchResult_result on MovieOrTVOrPeople {
  __isMovieOrTVOrPeople: __typename
  __typename
  ... on MovieResult {
    ...MovieSearchResult_movie
  }
  ... on PersonListResult {
    ...PersonSearchResult_person
  }
}

fragment useKnownForDescription_person on PersonListResult {
  knownFor {
    __typename
    ... on MovieResult {
      title
    }
    ... on TVShowResult {
      name
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "term"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  },
  {
    "kind": "Variable",
    "name": "term",
    "variableName": "term"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
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
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchResultsListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MovieOrTVOrPeopleConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MovieOrTVOrPeopleEdge",
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
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "SearchResult_result"
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchResultsListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "MovieOrTVOrPeopleConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MovieOrTVOrPeopleEdge",
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
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isMovieOrTVOrPeople"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "alias": "movieId",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "id",
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "overview",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v4/*: any*/),
                            "kind": "ScalarField",
                            "name": "poster",
                            "storageKey": "poster(size:\"W185\")"
                          }
                        ],
                        "type": "IMovie",
                        "abstractKey": "__isIMovie"
                      }
                    ],
                    "type": "MovieResult",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": (v4/*: any*/),
                            "kind": "ScalarField",
                            "name": "profilePicture",
                            "storageKey": "profilePicture(size:\"W185\")"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": "personId",
                                "args": null,
                                "kind": "ScalarField",
                                "name": "id",
                                "storageKey": null
                              }
                            ],
                            "type": "IBasicPerson",
                            "abstractKey": "__isIBasicPerson"
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": null,
                                "kind": "LinkedField",
                                "name": "knownFor",
                                "plural": true,
                                "selections": [
                                  (v2/*: any*/),
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v3/*: any*/)
                                    ],
                                    "type": "MovieResult",
                                    "abstractKey": null
                                  },
                                  {
                                    "kind": "InlineFragment",
                                    "selections": [
                                      (v5/*: any*/)
                                    ],
                                    "type": "TVShowResult",
                                    "abstractKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "type": "PersonListResult",
                            "abstractKey": null
                          }
                        ],
                        "type": "IPerson",
                        "abstractKey": "__isIPerson"
                      }
                    ],
                    "type": "PersonListResult",
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
    ]
  },
  "params": {
    "cacheID": "442b32cd1cb2679c42b27df8029df716",
    "id": null,
    "metadata": {},
    "name": "SearchResultsListQuery",
    "operationKind": "query",
    "text": "query SearchResultsListQuery(\n  $term: String!\n) {\n  search(term: $term, first: 5) {\n    edges {\n      node {\n        __typename\n        ...SearchResult_result\n      }\n    }\n  }\n}\n\nfragment MovieLinkContainer_movie on IMovie {\n  __isIMovie: __typename\n  movieId: id\n}\n\nfragment MovieSearchResult_movie on IMovie {\n  __isIMovie: __typename\n  ...MovieLinkContainer_movie\n  title\n  overview\n  poster(size: W185)\n}\n\nfragment PersonLinkContainer_person on IBasicPerson {\n  __isIBasicPerson: __typename\n  personId: id\n}\n\nfragment PersonSearchResult_person on IPerson {\n  __isIPerson: __typename\n  ...PersonLinkContainer_person\n  name\n  profilePicture(size: W185)\n  ...useKnownForDescription_person\n}\n\nfragment SearchResult_result on MovieOrTVOrPeople {\n  __isMovieOrTVOrPeople: __typename\n  __typename\n  ... on MovieResult {\n    ...MovieSearchResult_movie\n  }\n  ... on PersonListResult {\n    ...PersonSearchResult_person\n  }\n}\n\nfragment useKnownForDescription_person on PersonListResult {\n  knownFor {\n    __typename\n    ... on MovieResult {\n      title\n    }\n    ... on TVShowResult {\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7472b51ac2cd673794c6c19c1d32f7a4';
export default node;
