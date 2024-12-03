const student = {
  name: "Soyab Aktar",
  roll: 24,
  class: 5,
  isPass: true,
  friends: ["jet", "neon", "brim", "cypher"],
  liked: [{ food: "samosa" }, { game: "God of War" }, { subject: "coding" }],
  performance: function () {
    console.log("He is good at study .");
  },
  school: {
    isGovt: true,
    totalStudents: 3000,
  },
};

console.log(student);
student.performance();