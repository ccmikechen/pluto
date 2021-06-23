/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReplyToLink_post = {
    readonly id: string;
    readonly " $refType": "ReplyToLink_post";
};
export type ReplyToLink_post$data = ReplyToLink_post;
export type ReplyToLink_post$key = {
    readonly " $data"?: ReplyToLink_post$data;
    readonly " $fragmentRefs": FragmentRefs<"ReplyToLink_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReplyToLink_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};
(node as any).hash = '60ec07365bc0f37df1133c41cbceb195';
export default node;
