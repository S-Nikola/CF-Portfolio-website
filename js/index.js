document.addEventListener('DOMContentLoaded', function() {

  //Light mode switch
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
  const bodyBackground = document.body;
  const link = document.querySelectorAll(".link");
  const boldText = document.querySelectorAll("b");
  const textBox = document.querySelectorAll(".text-box");
  const project = document.querySelectorAll(".project");
  const tool = document.querySelectorAll(".tool");

  if (e.target.checked) {
    bodyBackground.classList.toggle("light-mode");
    boldText.forEach(boldText => boldText.classList.toggle("dark-bold"));
    textBox.forEach(textBox => textBox.classList.toggle("light-text-box"));
    project.forEach(project => project.classList.toggle("light-text-box"));
    tool.forEach(tool => tool.classList.toggle("light-tool"));
    link.forEach(link => link.classList.toggle("dark-link"));
  } else {
    bodyBackground.classList.remove("light-mode");
    boldText.forEach(boldText => boldText.classList.remove("dark-bold"));
    textBox.forEach(textBox => textBox.classList.remove("light-text-box"));
    project.forEach(project => project.classList.remove("light-text-box"));
    tool.forEach(tool => tool.classList.remove("light-tool"));
    link.forEach(link => link.classList.remove("dark-link"));
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);

// Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      if (hamburger.classList.contains("active") && navMenu.classList.contains("active")) {
        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        }));
      }
    });
  }
});







