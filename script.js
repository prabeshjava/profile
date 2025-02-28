// Function to update the greeting based on the time of day
const updateGreeting = () => {
  const greetingElement = document.getElementById("greeting");
  const currentHour = new Date().getHours(); // Get the current hour (0-23)

  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  greetingElement.textContent = `${greeting}, Welcome to my portfolio`;
};

// Function to update the copyright year
const updateCopyrightYear = () => {
  const yearElement = document.getElementById("current-year");
  const currentYear = new Date().getFullYear(); // Get the current year
  yearElement.textContent = currentYear; // Update the year in the HTML
};

// Call the functions to update the greeting and copyright year when the page loads
updateGreeting();
updateCopyrightYear();

// Optional: Update the greeting every minute
setInterval(updateGreeting, 60000); // 60000 milliseconds = 1 minute


// Toggle Dark Mode
const toggleDarkMode = () => {
  const body = document.body;
  const darkModeToggle = document.querySelector("#dark-mode-toggle i");

  body.classList.toggle("dark-mode");

  // Change icon based on theme
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.classList.remove("fa-moon");
    darkModeToggle.classList.add("fa-sun");
  } else {
    darkModeToggle.classList.remove("fa-sun");
    darkModeToggle.classList.add("fa-moon");
  }
};

// Add event listener to the button
document.querySelector("#dark-mode-toggle").addEventListener("click", toggleDarkMode);