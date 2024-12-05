//! 1- Where to add
const mainContainer = document.getElementById("mainContain");

//! 2- Create tags to add to destination
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "This is new from js";

const p = document.createElement("p");
p.innerText = "Hello , friends how are you, welcome back";

//! 3- Append tags

section.appendChild(h1);
section.appendChild(p);
mainContainer.append(section);


