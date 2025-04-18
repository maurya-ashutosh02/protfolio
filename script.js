var typed = new Typed(".text",{
    strings : ["FullStack Developer" , "Software Engineer" , "web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDisplay:1000,
    loop:true
})

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
  
    if (menuToggle && navbar) {
      menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('show');
      });
    }
  });
  
  function toggleTheme() {
    document.body.classList.toggle('light-mode');
    
    const toggleBtn = document.getElementById('theme-toggle');
    const isLightMode = document.body.classList.contains('light-mode');
  
    toggleBtn.textContent = isLightMode ? 'Dark' : 'Light';
  }
  