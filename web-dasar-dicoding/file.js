 //make dropdown navbar in larger device
            const dropi= document.getElementById('dropi');
dropi.addEventListener('mouseenter', function(e){
    const piee= document.querySelector('.post ul');
                piee.classList.toggle('active');

});



dropi.addEventListener('mouseleave', function(e){
    const piee= document.querySelector('.post ul');
                piee.classList.remove('active');
        
})

dropi.addEventListener('mouseenter', function(e) {
    const piq = document.querySelector('.post ul');
    piq.style.zIndex = "5";
})

//small device for navbar
const hamburger = document.querySelector('nav .hamburger');
const iconExit = document.querySelector('nav ul .iconExit');

hamburger.addEventListener('click', function(e){
    const navbar = document.querySelector('nav ul');
                navbar.classList.toggle('active');

});

iconExit.addEventListener('click', function(e){
    const navbar= document.querySelector('nav ul');
                navbar.classList.remove('active');
        
})

//dropdown in navbar for small device
const dropdownNav = document.querySelector('nav ul .post');
const dropdown2 = document.getElementById('dropdown2')
dropdownNav.addEventListener('click', function(e) {
    const navbarInside = document.querySelector('nav ul .post .smallDevice');
    navbarInside.classList.toggle('active');
    dropdownNav.classList.toggle('active');
})
dropdown2.addEventListener('click', function(e) {
    const dropdownNav = document.querySelector('nav ul .post');
    const navbarInside = document.querySelector('nav ul .post .smallDevice');
    navbarInside.classList.remove('active');

})
