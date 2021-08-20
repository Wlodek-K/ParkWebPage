// Pobiera modal
let modal = document.getElementById("myModal");

// Pobiera przycisk, który otwiera okno modalne
let btn = document.getElementById("modal_btn");

// Pobiera element <span>, który zamyka modal
let span = document.getElementsByClassName("close")[0];

// Gdy użytkownik kliknie przycisk, otwórz okno modalne
btn.onclick = function() {
   modal.style.display = "block";
}

// Gdy użytkownik kliknie <span> (x), zamknij modal
span.onclick = function() {
   modal.style.display = "none";
}

// Gdy użytkownik kliknie w dowolnym miejscu poza modalem, zamknij go
window.onclick = function(event) {
   if (event.target === modal) {
      modal.style.display = "none";
   }
}