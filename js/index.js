document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

  function switchTheme(e) {
  const bodyBackground = document.body;
  const lookWork = document.getElementById("look-work");
  const boldText = document.querySelectorAll("b");
  const textBox = document.querySelectorAll(".text-box");
  const project = document.querySelectorAll(".project");
  const tool = document.querySelectorAll(".tool");

  if (e.target.checked) {
    bodyBackground.classList.toggle("light-mode");
    lookWork.classList.toggle("dark-link");
    boldText.forEach(boldText => boldText.classList.toggle("dark-bold"));
    textBox.forEach(textBox => textBox.classList.toggle("light-text-box"));
    project.forEach(project => project.classList.toggle("light-text-box"));
    tool.forEach(tool => tool.classList.toggle("light-tool"));
  } else {
    bodyBackground.classList.remove("light-mode");
    lookWork.classList.remove("dark-link");
    boldText.forEach(boldText => boldText.classList.remove("dark-bold"));
    textBox.forEach(textBox => textBox.classList.remove("light-text-box"));
    project.forEach(project => project.classList.remove("light-text-box"));
    tool.forEach(tool => tool.classList.remove("light-tool"));
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
});






