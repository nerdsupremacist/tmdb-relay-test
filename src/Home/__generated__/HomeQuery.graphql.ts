/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TrendingMovies_data" | "TrendingShows_data" | "PopularMovies_data" | "PopularShows_data" | "NowPlayingMovies_data" | "ShowsOnTheAir_data" | "TopRatedMovies_data" | "TopRatedShows_data">;
};
export type HomeQuery = {
    readonly response: HomeQueryResponse;
    readonly variables: HomeQueryVariables;
};



/*
query HomeQuery {
  ...TrendingMovies_data_W6qZg
  ...TrendingShows_data_W6qZg
  ...PopularMovies_data_W6qZg
  ...PopularShows_data_W6qZg
  ...NowPlayingMovies_data_W6qZg
  ...ShowsOnTheAir_data_W6qZg
  ...TopRatedMovies_data_W6qZg
  ...TopRatedShows_data_W6qZg
}

fragment MovieLinkContainer_movie on Movie {
  id
}

fragment MovieListItem_movie on Movie {
  ...MovieLinkContainer_movie
  title
  poster(size: W154)
}

fragment NowPlayingMovies_data_W6qZg on Query {
  movies {
    nowPlaying(first: 7) {
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

fragment PopularMovies_data_W6qZg on Query {
  movies {
    popular(first: 7) {
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

fragment PopularShows_data_W6qZg on Query {
  tv {
    popular(first: 7) {
      edges {
        node {
          ...ShowListItem_show
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

fragment ShowLinkContainer_show on TVShow {
  id
}

fragment ShowListItem_show on TVShow {
  ...ShowLinkContainer_show
  name
  poster(size: W154)
}

fragment ShowsOnTheAir_data_W6qZg on Query {
  tv {
    onTheAir(first: 7) {
      edges {
        node {
          ...ShowListItem_show
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

fragment TopRatedMovies_data_W6qZg on Query {
  movies {
    topRated(first: 7) {
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

fragment TopRatedShows_data_W6qZg on Query {
  tv {
    topRated(first: 7) {
      edges {
        node {
          ...ShowListItem_show
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

fragment TrendingMovies_data_W6qZg on Query {
  movies {
    trending(first: 7) {
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

fragment TrendingShows_data_W6qZg on Query {
  tv {
    trending(first: 7) {
      edges {
        node {
          ...ShowListItem_show
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
    "name": "count",
    "value": 7
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 7
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
  "name": "cursor",
  "storageKey": null
},
v6 = {
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
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      (v5/*: any*/)
    ],
    "storageKey": null
  },
  (v6/*: any*/)
],
v8 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TVShowEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TVShow",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      (v5/*: any*/)
    ],
    "storageKey": null
  },
  (v6/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": [
      {
        "args": (v0/*: any*/),
        "kind": "FragmentSpread",
        "name": "TrendingMovies_data"
      },
      {
        "args": (v0/*: any*/),
        "kind": "FragmentSpread",
        "name": "TrendingShows_data"
      },
      {
        "args": (v0/*: any*/),
        "kind": "FragmentSpread",
        "name": "PopularMovies_data"
      },
      {
        "args": (v0/*: any*/),
        "kind": "FragmentSpread",
        "name": "PopularShows_data"
      },
      {
        "args": (v0/*: any*/),
        "kind": "FragmentSpread",
        "name": "NowPlayingMovies_data"
      },
      {
        "args": (v0/*: any*/),
        "kind": "FragmentSpread",
        "name": "ShowsOnTheAir_data"
      },
      {
        "args": (v0/*: any*/),
        "kind": "FragmentSpread",
        "name": "TopRatedMovies_data"
      },
      {
        "args": (v0/*: any*/),
        "kind": "FragmentSpread",
        "name": "TopRatedShows_data"
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
            "args": (v1/*: any*/),
            "concreteType": "MovieConnection",
            "kind": "LinkedField",
            "name": "trending",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": "trending(first:7)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "TrendingMovies_trending",
            "kind": "LinkedHandle",
            "name": "trending"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "MovieConnection",
            "kind": "LinkedField",
            "name": "popular",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": "popular(first:7)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "PopularMovies_data_movies_popular",
            "kind": "LinkedHandle",
            "name": "popular"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "MovieConnection",
            "kind": "LinkedField",
            "name": "nowPlaying",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": "nowPlaying(first:7)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "NowPlayingMovies_data_movies_nowPlaying",
            "kind": "LinkedHandle",
            "name": "nowPlaying"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "MovieConnection",
            "kind": "LinkedField",
            "name": "topRated",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": "topRated(first:7)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "TopRatedMovies_topRated",
            "kind": "LinkedHandle",
            "name": "topRated"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "TV",
        "kind": "LinkedField",
        "name": "tv",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "TVShowConnection",
            "kind": "LinkedField",
            "name": "trending",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": "trending(first:7)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "TrendingShows_data_trending",
            "kind": "LinkedHandle",
            "name": "trending"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "TVShowConnection",
            "kind": "LinkedField",
            "name": "popular",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": "popular(first:7)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "PopularShows_data_popular",
            "kind": "LinkedHandle",
            "name": "popular"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "TVShowConnection",
            "kind": "LinkedField",
            "name": "onTheAir",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": "onTheAir(first:7)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "ShowsOnTheAir_data_onTheAir",
            "kind": "LinkedHandle",
            "name": "onTheAir"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "concreteType": "TVShowConnection",
            "kind": "LinkedField",
            "name": "topRated",
            "plural": false,
            "selections": (v8/*: any*/),
            "storageKey": "topRated(first:7)"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "RopRatedShows_data_topRated",
            "kind": "LinkedHandle",
            "name": "topRated"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c041b48db2a6f721c2cc0f176732698c",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  ...TrendingMovies_data_W6qZg\n  ...TrendingShows_data_W6qZg\n  ...PopularMovies_data_W6qZg\n  ...PopularShows_data_W6qZg\n  ...NowPlayingMovies_data_W6qZg\n  ...ShowsOnTheAir_data_W6qZg\n  ...TopRatedMovies_data_W6qZg\n  ...TopRatedShows_data_W6qZg\n}\n\nfragment MovieLinkContainer_movie on Movie {\n  id\n}\n\nfragment MovieListItem_movie on Movie {\n  ...MovieLinkContainer_movie\n  title\n  poster(size: W154)\n}\n\nfragment NowPlayingMovies_data_W6qZg on Query {\n  movies {\n    nowPlaying(first: 7) {\n      edges {\n        node {\n          ...MovieListItem_movie\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment PopularMovies_data_W6qZg on Query {\n  movies {\n    popular(first: 7) {\n      edges {\n        node {\n          ...MovieListItem_movie\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment PopularShows_data_W6qZg on Query {\n  tv {\n    popular(first: 7) {\n      edges {\n        node {\n          ...ShowListItem_show\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment ShowLinkContainer_show on TVShow {\n  id\n}\n\nfragment ShowListItem_show on TVShow {\n  ...ShowLinkContainer_show\n  name\n  poster(size: W154)\n}\n\nfragment ShowsOnTheAir_data_W6qZg on Query {\n  tv {\n    onTheAir(first: 7) {\n      edges {\n        node {\n          ...ShowListItem_show\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment TopRatedMovies_data_W6qZg on Query {\n  movies {\n    topRated(first: 7) {\n      edges {\n        node {\n          ...MovieListItem_movie\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment TopRatedShows_data_W6qZg on Query {\n  tv {\n    topRated(first: 7) {\n      edges {\n        node {\n          ...ShowListItem_show\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment TrendingMovies_data_W6qZg on Query {\n  movies {\n    trending(first: 7) {\n      edges {\n        node {\n          ...MovieListItem_movie\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment TrendingShows_data_W6qZg on Query {\n  tv {\n    trending(first: 7) {\n      edges {\n        node {\n          ...ShowListItem_show\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '02f6466a88be3fec442f510dd44332cd';
export default node;
