

// DISPLAY CURRENT DATE
var now = new Date();
document.getElementsByClassName('time')[0].innerHTML=now.toDateString();


// MENU MODAL
const menuButton = document.getElementsByClassName("menu-btn")[0];
const modal = document.getElementsByClassName("menu-modal")[0];

// DISPLAYS MENU MODAL WHEN MENU BUTTON IS CLICKED
menuButton.onclick = function(){
    modal.style.display = "block";
}

// CLICK OUTSIDE THE MENU MODAL TO CLOSE
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}