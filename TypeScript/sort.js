// 冒泡排序: 两两比较，大的放后面
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let x = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = x;
    }
  }
  return arr;
}
// 选择排序: 依次取数组的每一位和之后的所有数据做比较，拿到最小的和当前我只交换
function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    arr[minIndex] = arr[i];
    arr[i] = min;
  }
  return arr;
}

// console.log(bubbleSort([6, 5, 4, 3, 2]));
console.log(selectSort([5, 4, 6, 2, 3]));
