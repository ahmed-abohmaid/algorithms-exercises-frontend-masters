import React from "react";
import { shuffle, range, intersection } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  let swapped = false;

  do {
    swapped = false;

    for (let i = 0; i < nums.length; i++) {
      snapshot(nums);

      if (nums[i] > nums[i + 1]) {
        swapped = true;

        const tempNum = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = tempNum;
      }
    }
  } while (swapped)

  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
