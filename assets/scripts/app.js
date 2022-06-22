const body = document.querySelector('body');
const navigation = document.querySelector(".menu-scrolling");
const meeting = document.querySelector(".meeting");

window.addEventListener('scroll', () => {
    if(window.scrollY > 200){
      navigation.classList.add('active');
      meeting.style.display = "none";
    } else {
        navigation.classList.remove('active');
        meeting.style.display = "block";
    }
});


const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = document.querySelector('.burger');
const closeBurgerBtn = document.querySelectorAll('.close-burger');

burgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('active');
    body.classList.toggle('stop-scrolling');
    if (burgerBtn.innerHTML === "[ MENU ]"){
        burgerBtn.innerHTML = "[ CLOSE ]";
    }else{
        burgerBtn.innerHTML = "[ MENU ]";
    }
    closeBurger();
});

function closeBurger(){
    closeBurgerBtn.forEach(trigger => trigger.addEventListener("click", ()=>{
        burgerMenu.classList.remove('active');
        body.classList.remove('stop-scrolling');
        burgerBtn.innerHTML = "[ MENU ]";
    }));
}