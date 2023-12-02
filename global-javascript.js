const menuButton = document.querySelector(".menu-button");
const exitButton = document.getElementById("exit-button");
const menuContainer = document.getElementById("menu-container");
const menuContainerOpen = document.querySelector(".menu-container-open");
const menuContainerClose = document.querySelector(".menu-container-close");
const menuBackdrop = document.getElementById("menu-backdrop");




const openMenu = function () {
  menuContainer.classList.remove("menu-container-close");
  menuContainer.classList.add("menu-container-open");
  menuBackdrop.classList.add("menu-backdrop");
  body.classList.add("disable-body-scroll");
};
menuButton.addEventListener("click", openMenu);

const closeMenu = function () {
    menuContainer.classList.add("menu-container-close");
    menuContainer.classList.remove("menu-container-open");
    menuBackdrop.classList.remove("menu-backdrop");
    body.classList.remove("disable-body-scroll");
  };
  exitButton.addEventListener("click", closeMenu);

  let darkMode = localStorage.getItem("darkmode");
  const body = document.getElementById("body");
  const p = document.getElementById("p");
  const h1 = document.getElementById("h1");
  const modeToggle = document.querySelector(".mode-toggle");
  const toggleButton = document.getElementById("toggle-button");




  const enableDarkMode = function () {
        body.classList.add("dark-mode");
        body.classList.add("dark-mode-text");
      
        toggleButton.classList.add("toggle-button-dark");
        
        localStorage.setItem('darkmode', 'enabled');
        
    };
  



  const disableDarkMode = function () {
    body.classList.remove("dark-mode");
    body.classList.remove("dark-mode-text");
  
    toggleButton.classList.remove("toggle-button-dark");
    
    localStorage.setItem('darkmode', 'disabled');
    
};

  if (darkMode === "enabled") { //checks if dar
      enableDarkMode();
  }

 modeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkmode");
  if (darkMode !== 'enabled') {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
 });





