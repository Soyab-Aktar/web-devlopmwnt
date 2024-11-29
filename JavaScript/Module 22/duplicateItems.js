function removeClone(arr) {
  const temp = [];
  for (const num of arr) {
    if (temp.includes(num) === false) {
      temp.push(num);
    }
  }

  console.log(temp);
}

const arr=[1,4,1,7,8,2,2,5,8,9,1];
removeClone(arr);
