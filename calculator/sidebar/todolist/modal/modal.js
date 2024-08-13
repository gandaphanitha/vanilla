const showPopup = document.getElementById("show-popup")
const popupContainer = document.getElementById("popup-container")
const closeBtn = document.getElementById("close-btn");

function openPopup() {
    popupContainer.style.display = "flex";
}

function closePopup() {
    popupContainer.style.display = "none";
}