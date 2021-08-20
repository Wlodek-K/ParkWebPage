// slider(gallery)
/* Startowy indeks początku slajdu */
let slideIndex = 1;
/* Nazywamy funkcję, która jest zaimplementowana poniżej: */
showSlides(slideIndex);

/* Zwiększa indeks o 1 - pokaż następny slajd: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Zmniejsza indeks o 1 - pokaż poprzedni slajd: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Ustawia bieżący slajd: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Funkcja Swipe: */
function showSlides(n) {
    /* Nawiązujemy do elementów o nazwie klasy „item”, czyli do zdjęć: */
    let slides = document.getElementsByClassName("item");

    /* Sprawdzanie liczby slajdów: */
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Przechodzimy przez każdy slajd w pętli for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Tworzymy blok elementu: */
    slides[slideIndex - 1].style.display = "block";
}
