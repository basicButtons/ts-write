const testArr = new Array(50000);
testArr.fill(1).unshift(1, 2, 3, 4, 5);

export const findTopK = (arr: number[], k: number): number => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  const flag = arr[0];
  const minArr: number[] = [];
  const maxArr: number[] = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < flag) {
      minArr.push(arr[i]);
    } else {
      maxArr.push(arr[i]);
    }
  }
  if (maxArr.length === k - 1) {
    return flag;
  } else if (maxArr.length >= k) {
    return findTopK(maxArr, k);
  } else {
    return findTopK(minArr, k - maxArr.length - 1);
  }
};

console.log(findTopK(testArr, 50000));
