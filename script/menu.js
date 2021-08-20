
window.onscroll = () =>{
    const header = document.querySelector('.header');
    const y = window.scrollY;
   // console.log(window.scrollY);
    // lepkie menu zaczyna działać podczas przewijania strony o 500 pikseli
    if (y > 500){
        header.classList.add('header_fixed');
    //  lepkie menu kończy się działać podczas przewijania strony o 500 pikseli
    }else if (y < 500){
        header.classList.remove('header_fixed');
    }
}

