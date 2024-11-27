const computer = {
  cpu: "Amd Ryzen 5 5600",
  motherboard: "B450m Auras",
  ram: "16gb",
  ssd: "500 gb gen 3 ",
  gpu: "GTX 1660"
};

//KEY
const keys = Object.keys(computer);
console.log(keys);

//VALUE
const values = Object.values(computer);
console.log(values);

//Nested

const university= {
    college: 20,
    teachers:50,
    course:{
        art:['Bengali','English','PolScience'],
        science:['Biology','Chemistry','Math','Physics']
    }
}

console.log(university.college);
console.log(university.teachers);
console.log(university.course.art);
console.log(university.course.science);

console.log(computer);
delete computer.ssd;
console.log(computer);

