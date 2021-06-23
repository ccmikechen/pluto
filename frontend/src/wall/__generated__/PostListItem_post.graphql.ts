/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostListItem_post = {
    readonly id: string;
    readonly content: string;
    readonly insertedAt: string;
    readonly replyTo: {
        readonly " $fragmentRefs": FragmentRefs<"ReplyToLink_post">;
    } | null;
    readonly " $refType": "PostListItem_post";
};
export type PostListItem_post$data = PostListItem_post;
export type PostListItem_post$key = {
    readonly " $data"?: PostListItem_post$data;
    readonly " $fragmentRefs": FragmentRefs<"PostListItem_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostListItem_post",
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Post",
      "kind": "LinkedField",
      "name": "replyTo",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ReplyToLink_post"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = '1e96e0f1963ae1a34ca58c8b3f12df57';
export default node;
