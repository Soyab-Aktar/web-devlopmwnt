// Object impliment
const bottle = {
  brand: "AquaFina",
  price: 20,
  color: "Transparent",
  isMinarel: true,
};

const student = {
  studentName: "Soyab Aktar",
  rollNo: 23,
  dept: "BCA",
  year: "2nd",
};

//Changing value
student.dept="CBCA";

//Print objects

//1->Dot Notation
console.log(student.studentName);
console.log(student.rollNo);
const course = student.dept;
console.log(course);

//2->Bracket Notation
console.log(bottle['brand']);
console.log(bottle['isMinarel']);
const colorBottle=bottle['color'];
console.log(colorBottle);
