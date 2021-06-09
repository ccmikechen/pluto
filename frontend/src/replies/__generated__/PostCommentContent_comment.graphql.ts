/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostCommentContent_comment = {
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
(node as any).hash = 'b88adbc236f8b85b9b1303c9cc0aa742';
export default node;
