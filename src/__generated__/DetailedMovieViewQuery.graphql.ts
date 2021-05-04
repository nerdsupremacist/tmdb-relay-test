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

fragment DetailedMovieViewRoot_IMovie on IMovie {
  __isIMovie: __typename
  title
  rating
  overview
  details {
    status
    runtime
    tagline
  }
  poster(size: W185)
  backdrop(size: W780)
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "TypeDiscriminator",
                "abstractKey": "__isIMovie"
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
                    "name": "status",
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
                    "value": "W185"
                  }
                ],
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
                    "value": "W780"
                  }
                ],
                "kind": "ScalarField",
                "name": "backdrop",
                "storageKey": "backdrop(size:\"W780\")"
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
    "cacheID": "8e1bda1395b57e27941e202905155bf9",
    "id": null,
    "metadata": {},
    "name": "DetailedMovieViewQuery",
    "operationKind": "query",
    "text": "query DetailedMovieViewQuery(\n  $id: Int!\n) {\n  movies {\n    movie(id: $id) {\n      __typename\n      ...DetailedMovieViewRoot_IMovie\n    }\n  }\n}\n\nfragment DetailedMovieViewRoot_IMovie on IMovie {\n  __isIMovie: __typename\n  title\n  rating\n  overview\n  details {\n    status\n    runtime\n    tagline\n  }\n  poster(size: W185)\n  backdrop(size: W780)\n}\n"
  }
};
})();
(node as any).hash = '19545ad8e8ef89faadb34069858998b0';
export default node;
