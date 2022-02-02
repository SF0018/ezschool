//Dark mode & Light mode
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const THEME = 'mode';

document.addEventListener(
  'DOMContentLoaded', (event) => {
    applyTheme();
    const toggleSwitch = document.getElementById('toggle-switch');
    toggleSwitch.onclick = function() {
      let currentMode = localStorage.getItem(THEME);
      localStorage.setItem(
        THEME, 
        currentMode === DARK_MODE ? LIGHT_MODE : DARK_MODE
      );
      applyTheme();
    }
  }
);

function applyTheme() {
  let html = document.documentElement;
  let currentMode = localStorage.getItem(THEME);
  if (currentMode === DARK_MODE) {
    html.classList.add(DARK_MODE);
    document.getElementById('toggle-switch').innerHTML = 
      '<i class="fas fa-sun"></i>';
  } 
  else {
    html.classList.remove(DARK_MODE);
    document.getElementById('toggle-switch').innerHTML = 
      '<i class="fas fa-moon"></i>';
  }
}
// End of Dark mode & Light mode
// Top Nav bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// End of Top Nav bar