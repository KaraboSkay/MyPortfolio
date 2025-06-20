// Array of roles to cycle through
const roles = ["Frontend", "Backend", "Fullstack"];
let index = 0;

// Select the element with the class "role"
const roleElement = document.querySelector(".role");

// Function to update the text
setInterval(() => {
  // Increment the index and reset if it exceeds the array length
  index = (index + 1) % roles.length;

  // Fade out the text
  roleElement.style.opacity = 0;

  // Change the text after the fade-out transition
  setTimeout(() => {
    roleElement.textContent = roles[index];
    roleElement.style.opacity = 1; // Fade back in
  }, 500); // Match the transition duration in CSS
}, 2000); // Change text every 2 seconds