const hamburgerToggle = document.getElementById('hamburger-toggle');
const navbar= document.getElementById('navbar');






hamburgerToggle.addEventListener('click',function(){
    if(!navbar.classList.contains('open')){

        navbar.classList.add('open');
    }else{
        navbar.classList.remove('open');
    }
    
})