document
  .getElementById("post")
  .addEventListener("click", function postComment() {
    const texts = document.getElementById("textArea");
    const textData = texts.value;

    const containP = document.getElementById("contain");
    const p = document.createElement("p");
    p.innerText = textData;

    containP.appendChild(p);

    texts.value='';
  });
