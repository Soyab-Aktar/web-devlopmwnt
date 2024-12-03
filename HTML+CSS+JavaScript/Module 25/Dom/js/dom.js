console.log("Hello Friends .");
const lielements=document.getElementsByTagName('li');
console.log(lielements);

for(const li of lielements)
{
    console.log(li.innerText);
}