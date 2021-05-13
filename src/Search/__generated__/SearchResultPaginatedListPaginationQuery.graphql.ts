/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchResultPaginatedListPaginationQueryVariables = {
    count: number;
    cursor?: string | null;
    term: string;
};
export type SearchResultPaginatedListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"SearchResultPaginatedList_data">;
};
export type SearchResultPaginatedListPaginationQuery = {
    readonly response: SearchResultPaginatedListPaginationQueryResponse;
    readonly variables: SearchResultPaginatedListPaginationQueryVariables;
};



/*
query SearchResultPaginatedListPaginationQuery(
  $count: Int! = 20
  $cursor: String
  $term: String!
) {
  ...SearchResultPaginatedList_data_4j0hnM
}

fragment MovieLinkContainer_movie on Movie {
  id
}

fragment MovieSearchResult_movie on Movie {
  ...MovieLinkContainer_movie
  title
  overview
  poster(size: W185)
}

fragment PersonLinkContainer_person on Person {
  id
}

fragment PersonSearchResult_person on Person {
  ...PersonLinkContainer_person
  name
  profilePicture(size: W185)
  ...useKnownForDescription_person
}

fragment SearchResultPaginatedList_data_4j0hnM on Query {
  search(term: $term, first: $count, after: $cursor) {
    edges {
      node {
        __typename
        ...SearchResult_result
        ... on Node {
          __isNode: __typename
          id
        }
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment SearchResult_result on MovieOrTVOrPeople {
  __isMovieOrTVOrPeople: __typename
  __typename
  ... on Movie {
    ...MovieSearchResult_movie
  }
  ... on Person {
    ...PersonSearchResult_person
  }
}

fragment useKnownForDescription_person on Person {
  knownFor {
    __typename
    ... on Movie {
      title
    }
    ... on TVShow {
      name
    }
    ... on Node {
      __isNode: __typename
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": 20,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "term"
  }
],
v1 = {
  "kind": "Variable",
  "name": "term",
  "variableName": "term"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "size",
    "value": "W185"
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "kind": "InlineFragment",
  "selections": [
    (v4/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchResultPaginatedListPaginationQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "SearchResultPaginatedList_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchResultPaginatedListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
                  (v3/*: any*/),
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isMovieOrTVOrPeople"
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "overview",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v6/*: any*/),
                        "kind": "ScalarField",
                        "name": "poster",
                        "storageKey": "poster(size:\"W185\")"
                      }
                    ],
                    "type": "Movie",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v4/*: any*/),
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": (v6/*: any*/),
                        "kind": "ScalarField",
                        "name": "profilePicture",
                        "storageKey": "profilePicture(size:\"W185\")"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "knownFor",
                        "plural": true,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v5/*: any*/)
                            ],
                            "type": "Movie",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v7/*: any*/)
                            ],
                            "type": "TVShow",
                            "abstractKey": null
                          },
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Person",
                    "abstractKey": null
                  },
                  (v8/*: any*/)
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
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": [
          "term"
        ],
        "handle": "connection",
        "key": "SearchResultPaginatedList_data_search",
        "kind": "LinkedHandle",
        "name": "search"
      }
    ]
  },
  "params": {
    "cacheID": "b6af3572ee4fa0cc12bdf69ddc52c2a7",
    "id": null,
    "metadata": {},
    "name": "SearchResultPaginatedListPaginationQuery",
    "operationKind": "query",
    "text": "query SearchResultPaginatedListPaginationQuery(\n  $count: Int! = 20\n  $cursor: String\n  $term: String!\n) {\n  ...SearchResultPaginatedList_data_4j0hnM\n}\n\nfragment MovieLinkContainer_movie on Movie {\n  id\n}\n\nfragment MovieSearchResult_movie on Movie {\n  ...MovieLinkContainer_movie\n  title\n  overview\n  poster(size: W185)\n}\n\nfragment PersonLinkContainer_person on Person {\n  id\n}\n\nfragment PersonSearchResult_person on Person {\n  ...PersonLinkContainer_person\n  name\n  profilePicture(size: W185)\n  ...useKnownForDescription_person\n}\n\nfragment SearchResultPaginatedList_data_4j0hnM on Query {\n  search(term: $term, first: $count, after: $cursor) {\n    edges {\n      node {\n        __typename\n        ...SearchResult_result\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SearchResult_result on MovieOrTVOrPeople {\n  __isMovieOrTVOrPeople: __typename\n  __typename\n  ... on Movie {\n    ...MovieSearchResult_movie\n  }\n  ... on Person {\n    ...PersonSearchResult_person\n  }\n}\n\nfragment useKnownForDescription_person on Person {\n  knownFor {\n    __typename\n    ... on Movie {\n      title\n    }\n    ... on TVShow {\n      name\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b7a31513e9e13882453a4ce20616deb3';
export default node;
