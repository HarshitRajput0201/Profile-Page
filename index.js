let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

function openModal(){
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};
function closeModal(){
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};