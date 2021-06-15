var toggle = document.querySelector('.share');
var filed  = document.querySelector('.share-field');
toggle.onclick = function(){
    toggle.classList.toggle('active')
    filed.classList.toggle('active')
}