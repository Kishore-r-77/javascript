const nums = [5, 4, 3, 2, 1];

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length;
  const isAsc = arr[start] < arr[end];

  while (start <= end) {
    const mid = parseInt(start + (end - start) / 2);

    if (target == arr[mid]) {
      return mid;
    }
    if (isAsc) {
      if (target > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (target > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
};

console.log(binarySearch(nums, 1));
