
// ! getElementsByTagName
// const lielements=document.getElementsByTagName('li');
// console.log(lielements);

// for(const li of lielements)
// {
//     console.log(li.innerText);
// }

//! getElementByIdName
// const section1 = document.getElementById('section1');
// console.log(section1.innerHTML);

//! getElementsByIdClassName
// const class1 = document.getElementsByClassName('class1');

//! querySelectorAll
// const query1=document.querySelectorAll('#section1');
// const query2=document.querySelectorAll('.class1');
// console.log(query1);
// console.log(query2);

//^ Dynamic Style
// document.getElementById('section1').style.color= 'yellow'

//^ GetAttribute
// const title = document.getElementById('section3');
// title.getAttribute('class');

//^innerText
// document.getElementById('section1').innerText

// 'Section 1\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aspernatur!'

//^innerHTML
// document.getElementById('section1').innerHTML

// '\n        <h1>Section 1</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aspernatur!</p>\n      

//? nodeList
// const allSections=document.querySelectorAll('section');
// console.log(allSections);

//? childnode/parentnode
// const childNodes=document.getElementById('section2');
// console.log(childNodes.childNodes);

//? createElement
// const newelement =document.createElement('p');
// newelement.innerText='Hello, friend i am new in js.';

// const linkSection=document.getElementById('section2');
// linkSection.append(newelement);