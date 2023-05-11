let openBtn= document.querySelector('.nav');
let closeBtn= document.querySelector('.cross');
let navHide=document.querySelector('.navbar__menu')

openBtn.addEventListener('click',()=>{
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    navHide.classList.toggle('navbar__hide');
    
})

closeBtn.addEventListener('click',()=>{
    openBtn.classList.toggle('hide');
    closeBtn.classList.toggle('hide');
    navHide.classList.toggle('navbar__hide');
})

