/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostCommentContent_comment = {
    readonly id: string;
    readonly content: string;
    readonly insertedAt: string;
    readonly " $refType": "PostCommentContent_comment";
};
export type PostCommentContent_comment$data = PostCommentContent_comment;
export type PostCommentContent_comment$key = {
    readonly " $data"?: PostCommentContent_comment$data;
    readonly " $fragmentRefs": FragmentRefs<"PostCommentContent_comment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostCommentContent_comment",
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
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = 'ac54829b3721b466f4f55461286571b1';
export default node;
