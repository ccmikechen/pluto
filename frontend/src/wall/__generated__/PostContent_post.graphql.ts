/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PostContent_post = {
    readonly content: string;
    readonly insertedAt: string;
    readonly " $refType": "PostContent_post";
};
export type PostContent_post$data = PostContent_post;
export type PostContent_post$key = {
    readonly " $data"?: PostContent_post$data;
    readonly " $fragmentRefs": FragmentRefs<"PostContent_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostContent_post",
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
(node as any).hash = '402f412c5b9a629ee1f2a8fabaea9167';
export default node;
