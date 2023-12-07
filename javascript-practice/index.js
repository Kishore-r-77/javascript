const nums = [22, 33, 44, 10, 8, 7, 2];

const findPeakElement = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const mid = parseInt(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

console.log(findPeakElement(nums));
