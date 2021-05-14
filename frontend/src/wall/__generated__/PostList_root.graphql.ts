/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostList_root = {
    readonly posts: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"PostListItem_post">;
    }>;
    readonly " $refType": "PostList_root";
};
export type PostList_root$data = PostList_root;
export type PostList_root$key = {
    readonly " $data"?: PostList_root$data;
    readonly " $fragmentRefs": FragmentRefs<"PostList_root">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostList_root",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "PostListItem_post"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RootQueryType",
  "abstractKey": null
};
(node as any).hash = '1935a18a8678632ea6ad0b616865f8d8';
export default node;
