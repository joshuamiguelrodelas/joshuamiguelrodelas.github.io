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


//First Carousel Favorite Box
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  const offset = -currentIndex * 100; // Move to the appropriate slide
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Initialize the first slide
showSlide(currentIndex);


function fetchMeal() {
  const mealName = document.querySelector("#meal_search").value; // Get user input meal name
  if (!mealName) {
      alert("Please enter a meal name!");
      return;
  }

  // Foodie
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

  fetch(url)
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      const meal = data.meals ? data.meals[0] : null; // Get the first meal from the search results

      // If no meal is found
      if (!meal) {
        document.querySelector('#meal-container').innerHTML = '<p>No results found.</p>';
        return;
      }

      // Update the meal container with the meal name and image
      const mealContainer = document.querySelector('#meal-container');
      mealContainer.innerHTML = `
        <div class="meal-info">
          <h2>${meal.strMeal}</h2>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
      `;
    })
    .catch(error => {
      console.error('Error:', error);
      document.querySelector('#meal-container').innerHTML = '<p>Error fetching the recipe.</p>';
    });
}
