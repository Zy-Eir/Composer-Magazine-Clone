const hamButton = document.getElementById("hamburger-button");
const exitButton = document.getElementById("exit-button");
const navSection = document.getElementById("nav-dropdown-section");




hamButton.addEventListener('click', () => {
    if (navSection.style.display ===
        'none') {
            navSection.style.display = 'grid'
        } else {
            navSection.style.display = 'none'
        } 
});

exitButton.addEventListener('click', () => {
    if (navSection.style.display ===
        'grid') {
            navSection.style.display = 'none'
        }
});