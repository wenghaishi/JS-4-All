function foo(x) {
  x.push(4);
  x = [5, 6, 7];
  x.push(8);
}

const arr = [1, 2, 3];
foo(arr);
// console.log(arr)

const arr1 = [1, 2, 3];
const arr2 = arr1

arr2.push(4)

console.log(arr1)
