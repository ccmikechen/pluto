/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostQueryVariables = {
    id: string;
};
export type PostQueryResponse = {
    readonly post: {
        readonly " $fragmentRefs": FragmentRefs<"PostContent_post" | "PostComments_post">;
    } | null;
};
export type PostQuery = {
    readonly response: PostQueryResponse;
    readonly variables: PostQueryVariables;
};



/*
query PostQuery(
  $id: ID!
) {
  post(id: $id) {
    ...PostContent_post
    ...PostComments_post
    id
  }
}

fragment PostCommentContent_comment on Post {
  content
  insertedAt
}

fragment PostComments_post on Post {
  comments {
    id
    insertedAt
    ...PostCommentContent_comment
  }
}

fragment PostContent_post on Post {
  content
  insertedAt
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
  "name": "content",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "insertedAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PostContent_post"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PostComments_post"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "comments",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4055d347c3765bb260eaf5aa6fa8bc33",
    "id": null,
    "metadata": {},
    "name": "PostQuery",
    "operationKind": "query",
    "text": "query PostQuery(\n  $id: ID!\n) {\n  post(id: $id) {\n    ...PostContent_post\n    ...PostComments_post\n    id\n  }\n}\n\nfragment PostCommentContent_comment on Post {\n  content\n  insertedAt\n}\n\nfragment PostComments_post on Post {\n  comments {\n    id\n    insertedAt\n    ...PostCommentContent_comment\n  }\n}\n\nfragment PostContent_post on Post {\n  content\n  insertedAt\n}\n"
  }
};
})();
(node as any).hash = 'c4eca9318cff66e1e74cb4b3f50285a8';
export default node;
