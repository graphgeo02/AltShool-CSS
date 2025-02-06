

const toggleButton = document.querySelector('.dropdown-toggle');
const targetElement = document.querySelector('.dropdown-menu');

// Show the element when the button is clicked
toggleButton.addEventListener('click', (e) => {
  targetElement.style.display = 'block';
  e.stopPropagation(); // Prevent the window click event from firing immediately
});

// Hide the element when clicking outside
window.addEventListener('click', (e) => {
  if (!targetElement.contains(e.target) && e.target !== toggleButton) {
    targetElement.style.display = 'none';
  }
});



