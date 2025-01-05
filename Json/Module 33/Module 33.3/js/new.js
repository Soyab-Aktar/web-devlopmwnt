function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(data => displayuser(data));
}

function displayuser(data){
    const ul =document.getElementById('user-list');
    for(const user of data)
    {
        console.log(user.email);
        const li = document.createElement('li');
        li.innerText=user.email;
        ul.appendChild(li);
    }
}