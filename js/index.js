document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
    var bodyBackground = document.body;
    var lookWork = document.getElementById("look-work");
    var myName = document.getElementById("myName");

      if (e.target.checked) {
        bodyBackground.classList.toggle("light-mode");
        lookWork.classList.toggle("dark-link");
        myName.classList.toggle("dark-name");
      }
      else {
        bodyBackground.classList.remove("light-mode");
        lookWork.classList.remove("dark-link");
        myName.classList.remove("dark-name");
      }    
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
});
