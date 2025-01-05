function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((Response)=>Response.json())
    .then((json)=>console.log(json));
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(items => console.log(items));
}