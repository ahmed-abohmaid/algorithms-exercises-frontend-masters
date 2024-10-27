import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  for (let i = 1; i < nums.length; i++) {
    const temp = nums[i];

    for (let j = i - 1; j >= 0 && nums[j] > temp; j--) {
      snapshot(nums);
      nums[j + 1] = nums[j];
      nums[j] = temp;
    }
  }

  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
