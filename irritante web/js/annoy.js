//Event listener, gets the id of the elements
document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('button');
    let grid = document.getElementById('grid');
    let item2 = document.getElementById('item2');
    let item3 = document.getElementById('item3');
    let text = document.getElementById('text');
    let text2 = document.getElementById('text2');
    let h2 = document.getElementById('h2');
    let phone = document.getElementById('phone');
    let vid = document.getElementById('vid');

//toggles the css class to the html element when the button is clicked, starting and stopping the animations
    button.addEventListener('click', function () {
        grid.classList.toggle('animate');
        phone.classList.toggle('rotatePhone');
        item2.classList.toggle('animateTwo');
        item3.classList.toggle('animateThree');
        h2.classList.toggle('rotate');
        text.classList.toggle('rotateTwo');
        text2.classList.toggle('rotateTwo');
        button.classList.toggle('animateThree');
        vid.classList.toggle('show', phone.classList.contains('rotatePhone'));
    });
});







