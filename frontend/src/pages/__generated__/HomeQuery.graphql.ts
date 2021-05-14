/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"Wall_root">;
};
export type HomeQuery = {
    readonly response: HomeQueryResponse;
    readonly variables: HomeQueryVariables;
};



/*
query HomeQuery {
  ...Wall_root
}

fragment PostListItem_post on Post {
  id
  content
  insertedAt
}

fragment PostList_root on RootQueryType {
  posts: listPosts {
    id
    ...PostListItem_post
  }
}

fragment Wall_root on RootQueryType {
  ...PostList_root
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Wall_root"
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": [
      {
        "alias": "posts",
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "listPosts",
        "plural": true,
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
            "name": "content",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "insertedAt",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8cf58ea7cfe25b0b3be0fc5180ca9689",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  ...Wall_root\n}\n\nfragment PostListItem_post on Post {\n  id\n  content\n  insertedAt\n}\n\nfragment PostList_root on RootQueryType {\n  posts: listPosts {\n    id\n    ...PostListItem_post\n  }\n}\n\nfragment Wall_root on RootQueryType {\n  ...PostList_root\n}\n"
  }
};
(node as any).hash = '3a8089936d3716c0f56a048150ed00ac';
export default node;
