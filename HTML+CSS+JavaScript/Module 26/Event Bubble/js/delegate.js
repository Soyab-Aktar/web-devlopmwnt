// const items = document.getElementsByClassName('li-tag');

// for(const item of items)
// {
//     item.addEventListener('click',function(event){
//         event.target.parentNode.removeChild(event.target);
//     })
// }

document.getElementById('ul-tag').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
})

document.getElementById('btn').addEventListener('click',function(){
    const ulContain = document.getElementById('ul-tag');
    const li = document.createElement('li');
    li.innerText='New line of text added.';
    li.classList.add('li-tag');
    ulContain.appendChild(li);
})