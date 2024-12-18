/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }
  const middle = Math.floor(nums.length / 2);
  const leftSortesdResult = mergeSort(nums.slice(0, middle));
  const rightSortesdResult = mergeSort(nums.slice(middle));

  return merge(leftSortesdResult, rightSortesdResult);
};

function merge(leftArr, rightArr) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }
  return result.concat(i < j ? leftArr.slice(i) : rightArr.slice(j));
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
