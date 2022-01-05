const tooglebutton =  document.getElementsByClassName('toogle-button')[0];
const navlist = document.getElementsByClassName('nav-list')[0];

tooglebutton.addEventListener('click', ()=> {
    navlist.classList.toggle('active')
})