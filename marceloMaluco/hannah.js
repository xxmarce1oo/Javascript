document.addEventListener("DOMContentLoaded", function() {
    let texto = document.getElementById("hannah");
    let marcelo = document.getElementById("marcelo");
    marcelo.onmouseover = function() {
        texto.style.display = "block";
    };
    marcelo.onmouseout = function() {
        texto.style.display = "none";
    };
});