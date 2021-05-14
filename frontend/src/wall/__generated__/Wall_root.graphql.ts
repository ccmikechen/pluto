/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Wall_root = {
    readonly " $fragmentRefs": FragmentRefs<"PostList_root">;
    readonly " $refType": "Wall_root";
};
export type Wall_root$data = Wall_root;
export type Wall_root$key = {
    readonly " $data"?: Wall_root$data;
    readonly " $fragmentRefs": FragmentRefs<"Wall_root">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Wall_root",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PostList_root"
    }
  ],
  "type": "RootQueryType",
  "abstractKey": null
};
(node as any).hash = '1d5e3c01c715843c39cbd50005b492cb';
export default node;
