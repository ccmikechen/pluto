/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostListItem_post = {
    readonly id: string;
    readonly content: string;
    readonly insertedAt: string;
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
    }
  ],
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = 'c7130602f8aa39fe9b39f4b13a2b6dcf';
export default node;
