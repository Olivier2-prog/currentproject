const ul=document.getElementById('list');
function showMenu(){
    if(ul.classList.contains('d-none')){
        ul.classList.remove('d-none');
    }
    else{
        ul.classList.add('d-none');

    }
}