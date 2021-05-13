/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"NowPlayingMovies_data" | "TrendingMovies_data" | "TopRatedMovies_data">;
};
export type HomeQuery = {
    readonly response: HomeQueryResponse;
    readonly variables: HomeQueryVariables;
};



/*
query HomeQuery {
  ...NowPlayingMovies_data
  ...TrendingMovies_data
  ...TopRatedMovies_data
}

fragment MovieLinkContainer_movie on Movie {
  id
}

fragment MovieListItem_movie on Movie {
  ...MovieLinkContainer_movie
  title
  poster(size: W154)
}

fragment NowPlayingMovies_data on Query {
  movies {
    nowPlaying(first: 20) {
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
  }
}

fragment TopRatedMovies_data on Query {
  movies {
    topRated(first: 20) {
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
  }
}

fragment TrendingMovies_data on Query {
  movies {
    trending(first: 20) {
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
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v1 = [
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "NowPlayingMovies_data"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TrendingMovies_data"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TopRatedMovies_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeQuery",
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
            "args": (v0/*: any*/),
            "concreteType": "MovieConnection",
            "kind": "LinkedField",
            "name": "nowPlaying",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": "nowPlaying(first:20)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "NowPlayingMovies_data_movies_nowPlaying",
            "kind": "LinkedHandle",
            "name": "nowPlaying"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "MovieConnection",
            "kind": "LinkedField",
            "name": "trending",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": "trending(first:20)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "TrendingMovies_trending",
            "kind": "LinkedHandle",
            "name": "trending"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "MovieConnection",
            "kind": "LinkedField",
            "name": "topRated",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": "topRated(first:20)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "TopRatedMovies_topRated",
            "kind": "LinkedHandle",
            "name": "topRated"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d5c1889a6841af4a7df994ff743ceaa0",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  ...NowPlayingMovies_data\n  ...TrendingMovies_data\n  ...TopRatedMovies_data\n}\n\nfragment MovieLinkContainer_movie on Movie {\n  id\n}\n\nfragment MovieListItem_movie on Movie {\n  ...MovieLinkContainer_movie\n  title\n  poster(size: W154)\n}\n\nfragment NowPlayingMovies_data on Query {\n  movies {\n    nowPlaying(first: 20) {\n      edges {\n        node {\n          ...MovieListItem_movie\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment TopRatedMovies_data on Query {\n  movies {\n    topRated(first: 20) {\n      edges {\n        node {\n          ...MovieListItem_movie\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment TrendingMovies_data on Query {\n  movies {\n    trending(first: 20) {\n      edges {\n        node {\n          ...MovieListItem_movie\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '9ec202effb4910bb9ed890c18870dc98';
export default node;
