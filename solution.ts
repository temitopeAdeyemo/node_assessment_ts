const rotator = (arr: number[], k: number): string | number[] => {
  if (k < 0) {
    return 'k must be greater than zero';
  }

  if (arr.length < 1) {
    return [];
  }

  let currentElement: number = 0;
  const arrLength: number = arr.length;
  k = k % arrLength;

  let i: number;

  for (i = 0; i < k; i++) {
    currentElement = arr.pop();
    arr.unshift(currentElement);
  }

  return arr;
};

const isMonotonic = (arr: number[]) => {
  let arrLength: number = arr.length;
  let increasing: boolean = true;
  let decreasing: boolean = true;
  let monotonic: boolean;

  let i: number;

  for (i = 1; i < arrLength; i++) {
    if (arr[i] < arr[i - 1]) {
      increasing = false;
    }

    if (arr[i] > arr[i - 1]) {
      decreasing = false;
    }
  }

  monotonic = increasing || decreasing;

  return monotonic;
};
