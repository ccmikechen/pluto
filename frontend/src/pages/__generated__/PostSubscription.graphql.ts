/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PostSubscriptionVariables = {
    postId: string;
};
export type PostSubscriptionResponse = {
    readonly newComment: {
        readonly content: string;
        readonly insertedAt: string;
    };
};
export type PostSubscription = {
    readonly response: PostSubscriptionResponse;
    readonly variables: PostSubscriptionVariables;
};



/*
subscription PostSubscription(
  $postId: ID!
) {
  newComment(postId: $postId) {
    content
    insertedAt
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "postId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "postId",
    "variableName": "postId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "insertedAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "newComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootSubscriptionType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "newComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2f42fb8f9b01665b07754a641c3e3d10",
    "id": null,
    "metadata": {},
    "name": "PostSubscription",
    "operationKind": "subscription",
    "text": "subscription PostSubscription(\n  $postId: ID!\n) {\n  newComment(postId: $postId) {\n    content\n    insertedAt\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c64840feae932ab8c6f72816ae41e251';
export default node;
