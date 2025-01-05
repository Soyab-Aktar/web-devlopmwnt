function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response=>Response.json())
    .then(data=> displayPost(data))
}

function displayPost(data)
{
    const postContain = document.getElementById('post-contain');

    for(const post of data)
    {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML= `
        <h4>User-${post.userId} </h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Details: ${post.body}</p>
        `;
        postContain.appendChild(div);
    }
}
loadPost();