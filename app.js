const toggleBtn = document.querySelector("#toggle-btn");
const toggleIcon = document.querySelector("#toggle_icon");
toggleBtn.addEventListener('click', darkmodeToggle);
let darkmode = localStorage.getItem('darkmode');
// *darkmode check
if (darkmode === "enabled") {
    darkmodeOn();
}
// *darkmode Toggle
function darkmodeToggle() {
    darkmode = localStorage.getItem("darkmode")
    if (darkmode === "enabled") {
        darkmodeOff();
    } else {
        darkmodeOn();
    }
}
// *darkmode On
function darkmodeOn() {
    document.body.classList.add("dark");
    darkmode = true;
    localStorage.setItem("darkmode", "enabled");
    toggleIcon.className = "bx bx-moon";

}
// *darkmode Off
function darkmodeOff() {
    document.body.classList.remove("dark");
    darkmode = false;
    localStorage.setItem("darkmode", "null");
    toggleIcon.className = "bx bx-sun";
}