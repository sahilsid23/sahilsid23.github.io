// code for hamburger menu toggle 
burgerMenu = document.getElementById('burger');
navBar = document.querySelector('.navBar');
list = document.querySelector('.u-list');
rightNav = document.querySelector('.another-nav');

burgerMenu.addEventListener('click',()=>{
    list.classList.toggle('v-class-resp')
    rightNav.classList.toggle('v-class-resp')
    navBar.classList.toggle('navHeight-resp')
})
