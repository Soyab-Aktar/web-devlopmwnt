console.log("hello");
// option 2
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
// option 3
const makePink = document.getElementById("make-pink");
makePink.onclick = makepink;
function makepink() {
  document.body.style.backgroundColor = "pink";
}
// option 4
const makeViolet = document.getElementById("make-violet");
makeViolet.onclick = function makeviolet() {
  document.body.style.backgroundColor = "violet";
};
// Option 5
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.addEventListener("click", function makeBlue() {
  document.body.style.backgroundColor = "blue";
});
// Option 6
document
  .getElementById("make-green")
  .addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = "green";
  });
