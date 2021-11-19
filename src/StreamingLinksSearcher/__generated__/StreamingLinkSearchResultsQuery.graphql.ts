/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type StreamingLinkSearchResultsQueryVariables = {
    id: string;
    providers: Array<string>;
    countries: Array<string>;
};
export type StreamingLinkSearchResultsQueryResponse = {
    readonly node: {
        readonly searchStreamingOptions?: ReadonlyArray<{
            readonly bestOption: {
                readonly country: {
                    readonly emoji: string;
                };
                readonly option: {
                    readonly " $fragmentRefs": FragmentRefs<"StreamingLink_option">;
                };
            };
        }> | undefined;
    } | null;
};
export type StreamingLinkSearchResultsQuery = {
    readonly response: StreamingLinkSearchResultsQueryResponse;
    readonly variables: StreamingLinkSearchResultsQueryVariables;
};



/*
query StreamingLinkSearchResultsQuery(
  $id: ID!
  $providers: [ID!]!
  $countries: [ID!]!
) {
  node(id: $id) {
    __typename
    ... on IStreamable {
      __isIStreamable: __typename
      searchStreamingOptions(providers: $providers, countries: $countries) {
        bestOption {
          country {
            emoji
            id
          }
          option {
            ...StreamingLink_option
          }
        }
      }
    }
    id
  }
}

fragment StreamingLinkToolTip_option on StreamingOption {
  provider {
    name
    id
  }
}

fragment StreamingLink_option on StreamingOption {
  ...StreamingLinkToolTip_option
  provider {
    iconURL
    id
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "countries"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "providers"
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v4 = [
  {
    "kind": "Variable",
    "name": "countries",
    "variableName": "countries"
  },
  {
    "kind": "Variable",
    "name": "providers",
    "variableName": "providers"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "emoji",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "StreamingLinkSearchResultsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "StreamingResultForProvideer",
                "kind": "LinkedField",
                "name": "searchStreamingOptions",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "StreamingCountryOption",
                    "kind": "LinkedField",
                    "name": "bestOption",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "StreamingCountry",
                        "kind": "LinkedField",
                        "name": "country",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "StreamingOption",
                        "kind": "LinkedField",
                        "name": "option",
                        "plural": false,
                        "selections": [
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "StreamingLink_option"
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
            "type": "IStreamable",
            "abstractKey": "__isIStreamable"
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "StreamingLinkSearchResultsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v6/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "StreamingResultForProvideer",
                "kind": "LinkedField",
                "name": "searchStreamingOptions",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "StreamingCountryOption",
                    "kind": "LinkedField",
                    "name": "bestOption",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "StreamingCountry",
                        "kind": "LinkedField",
                        "name": "country",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "StreamingOption",
                        "kind": "LinkedField",
                        "name": "option",
                        "plural": false,
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
                                "name": "name",
                                "storageKey": null
                              },
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "IStreamable",
            "abstractKey": "__isIStreamable"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b8dba22953e3ee7b7adb53785d1f0b63",
    "id": null,
    "metadata": {},
    "name": "StreamingLinkSearchResultsQuery",
    "operationKind": "query",
    "text": "query StreamingLinkSearchResultsQuery(\n  $id: ID!\n  $providers: [ID!]!\n  $countries: [ID!]!\n) {\n  node(id: $id) {\n    __typename\n    ... on IStreamable {\n      __isIStreamable: __typename\n      searchStreamingOptions(providers: $providers, countries: $countries) {\n        bestOption {\n          country {\n            emoji\n            id\n          }\n          option {\n            ...StreamingLink_option\n          }\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment StreamingLinkToolTip_option on StreamingOption {\n  provider {\n    name\n    id\n  }\n}\n\nfragment StreamingLink_option on StreamingOption {\n  ...StreamingLinkToolTip_option\n  provider {\n    iconURL\n    id\n  }\n  bestOffering {\n    links {\n      web\n    }\n    ...useStreamingLinkTitle_offering\n    ...useStreamingLinkPriceDescription_offering\n  }\n}\n\nfragment useStreamingLinkPriceDescription_offering on StreamingOptionOffering {\n  type\n  price {\n    amount\n    currency\n  }\n}\n\nfragment useStreamingLinkTitle_offering on StreamingOptionOffering {\n  type\n}\n"
  }
};
})();
(node as any).hash = '71f569d3913304f786b45e5c72a5579b';
export default node;
