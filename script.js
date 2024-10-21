function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const toggleIcon = document.getElementById("icons");
  
  toggleIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
      icons.src = "assets/sun.png";
    }else{
      icons.src = "assets/moon.png";
    }
  });

  const darkModeToggle = document.getElementById('icons1');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode')
  if(document.body.classList.contains("dark-mode")){
      icons1.src = "assets/sun.png";
    }else{
      icons1.src = "assets/moon.png";
    }
  });
