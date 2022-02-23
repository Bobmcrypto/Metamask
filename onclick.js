var button = document.querySelector('#modal-button');
var modalWindow = document.querySelector('#modal-window');
var modalWindow2 = document.querySelector('#modal-window2');
var loader = document.querySelector('.loader');
var overflow = document.querySelector('.overflow');
var body = document.querySelector('body');
var content = document.querySelector('.content');

button.addEventListener('click', function(){
    overflow.style.background = 'rgba(0, 0, 0, 0.7)';
    modalWindow.style.display = 'none';
    loader.style.display = 'inline-block';
})
function go(){
    loader.style.display = 'none';
    modalWindow2.style.display = 'flex';
}
setTimeout(go2, 2250);
function go2(){
    content.style.display = 'none';
}