document.getElementById("btn-delete").addEventListener("click", function () {
    const infoS=document.getElementById('info');
    infoS.style.display='none';
});

document.getElementById("type-text").addEventListener('keyup',function(event){
    const typed = event.target.value;
    console.log(typed);

    const deleteBtn = document.getElementById('btn-delete');
    if(typed=='Delete')
    {
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled',true);
    }
})