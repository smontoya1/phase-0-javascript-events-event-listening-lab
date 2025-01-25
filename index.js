const input = document.getElementById('button');

function addingEventListener() {
    alert('alert!!');
    input.addEventListener('click', addingEventListener);
}



