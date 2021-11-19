/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchResultsListQueryVariables = {
    term: string;
};
export type SearchResultsListQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"SearchResultPaginatedList_data">;
};
export type SearchResultsListQuery = {
    readonly response: SearchResultsListQueryResponse;
    readonly variables: SearchResultsListQueryVariables;
};



/*
query SearchResultsListQuery(
  $term: String!
) {
  ...SearchResultPaginatedList_data_4E8ZZm
}

fragment LinkContainer_node on Node {
  __isNode: __typename
  ...routes_usePathLink_node
}

fragment MovieSearchResult_movie on Movie {
  ...LinkContainer_node
  title
  overview
  poster(size: W185)
}

fragment PersonSearchResult_person on Person {
  ...LinkContainer_node
  name
  profilePicture(size: W185)
  ...useKnownForDescription_person
}

fragment SearchResultPaginatedList_data_4E8ZZm on Query {
  search(term: $term, first: 5) {
    edges {
      node {
        __typename
        ...routes_usePathLinks_nodes
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
  ... on TVShow {
    ...ShowSearchResult_show
  }
}

fragment ShowSearchResult_show on TVShow {
  ...LinkContainer_node
  name
  overview
  poster(size: W185)
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
    "kind": "Literal",
    "name": "first",
    "value": 5
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
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
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
  "args": null,
  "kind": "ScalarField",
  "name": "overview",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "size",
    "value": "W185"
  }
],
v8 = {
  "alias": null,
  "args": (v7/*: any*/),
  "kind": "ScalarField",
  "name": "poster",
  "storageKey": "poster(size:\"W185\")"
},
v9 = {
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
        "args": [
          {
            "kind": "Literal",
            "name": "count",
            "value": 5
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
    "name": "SearchResultsListQuery",
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
                  (v4/*: any*/),
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
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": (v7/*: any*/),
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
                              (v9/*: any*/)
                            ],
                            "type": "TVShow",
                            "abstractKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Person",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v9/*: any*/),
                      (v6/*: any*/),
                      (v8/*: any*/)
                    ],
                    "type": "TVShow",
                    "abstractKey": null
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
    "cacheID": "a3104bd51f813e346b5b453635de5400",
    "id": null,
    "metadata": {},
    "name": "SearchResultsListQuery",
    "operationKind": "query",
    "text": "query SearchResultsListQuery(\n  $term: String!\n) {\n  ...SearchResultPaginatedList_data_4E8ZZm\n}\n\nfragment LinkContainer_node on Node {\n  __isNode: __typename\n  ...routes_usePathLink_node\n}\n\nfragment MovieSearchResult_movie on Movie {\n  ...LinkContainer_node\n  title\n  overview\n  poster(size: W185)\n}\n\nfragment PersonSearchResult_person on Person {\n  ...LinkContainer_node\n  name\n  profilePicture(size: W185)\n  ...useKnownForDescription_person\n}\n\nfragment SearchResultPaginatedList_data_4E8ZZm on Query {\n  search(term: $term, first: 5) {\n    edges {\n      node {\n        __typename\n        ...routes_usePathLinks_nodes\n        ...SearchResult_result\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SearchResult_result on MovieOrTVOrPeople {\n  __isMovieOrTVOrPeople: __typename\n  __typename\n  ... on Movie {\n    ...MovieSearchResult_movie\n  }\n  ... on Person {\n    ...PersonSearchResult_person\n  }\n  ... on TVShow {\n    ...ShowSearchResult_show\n  }\n}\n\nfragment ShowSearchResult_show on TVShow {\n  ...LinkContainer_node\n  name\n  overview\n  poster(size: W185)\n}\n\nfragment routes_usePathLink_node on Node {\n  __isNode: __typename\n  ...routes_usePathLinks_nodes\n}\n\nfragment routes_usePathLinks_nodes on Node {\n  __isNode: __typename\n  __typename\n  id\n}\n\nfragment useKnownForDescription_person on Person {\n  knownFor {\n    __typename\n    ... on Movie {\n      title\n    }\n    ... on TVShow {\n      name\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '559330944464dd010c934bfaa7de095c';
export default node;
