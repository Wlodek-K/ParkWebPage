// wszystko będzie ładowane po ładowaniu strony
window.onload = function (){
    let scrolled;
    let timer;
    document.getElementById('top').onclick = function (){
        scrolled = window.pageYOffset;
        //window.scrollTo(0,0);
        scrollToTop();
    }
    function scrollToTop(){
        if (scrolled > 0){
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 34; // szybkość przewijania
            timer = setTimeout(scrollToTop, 10);
        }
        else {
            clearTimeout(timer);     //spowalnia przewijanie iprzywraca stronę do współrzędnych x, y
            window.scrollTo(0, 0);
        }
    }

}