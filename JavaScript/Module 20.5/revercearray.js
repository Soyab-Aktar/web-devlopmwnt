const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log(arr);
// arr.reverse();
// console.log(arr);

const arrR =[];
for(const num of arr)
{
    arrR.unshift(num);
}
console.log(arrR);

