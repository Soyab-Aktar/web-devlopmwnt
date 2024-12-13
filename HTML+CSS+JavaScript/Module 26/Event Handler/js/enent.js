function clickUnlock() {
  const unlockP = document.getElementById("change-h1");
  unlockP.innerText = "Unlocked";
}

document.getElementById("btn-update").addEventListener("click", function () {
  const inputText = document.getElementById("input-text");
  const inputData = inputText.value;

  const h = document.getElementById("new-text");
  h.innerText= inputData;
  inputText.value='';
});
