let navbar = document.querySelector('.header .navbar');
let menubtn = document.querySelector('#menu-btn');
menubtn.onclick=()=> {
    menubtn.classList.toggle('fa-times'); //js css
    navbar.classList.toggle('active'); //js css
};
