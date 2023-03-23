document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
    var bodyBackground = document.body;
    var lookWork = document.getElementById("look-work");
      if (e.target.checked) {
        bodyBackground.classList.toggle("light-mode");
        lookWork.classList.toggle("dark-link");
      }
      else {
        bodyBackground.classList.remove("light-mode");
        lookWork.classList.remove("dark-link");
      }    
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
});
