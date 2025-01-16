// Function to toggle the left menu's collapsed state
function toggleMenu() {
  const menu = document.getElementById('left-menu'); // Correct ID reference
  menu.classList.toggle('collapsed');

  // Change cursor style when hovering over the menu icon
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.style.cursor = menu.classList.contains('collapsed') ? 'pointer' : 'url(https://cdn-icons-png.flaticon.com/512/1828/1828817.png), auto';
}

// Function to adjust the page width based on screen size
function adjustPageWidth() {
  const width = window.innerWidth;
  const body = document.body;

  if (width >= 992 && width <= 1600) {
    body.style.transform = 'scale(0.9)';
    body.style.transformOrigin = 'top center';
  } else if (width >= 700 && width <= 767) {
    body.style.transform = 'scale(0.8)';
    body.style.transformOrigin = 'top center';
  } else if (width >= 600 && width < 700) {
    body.style.transform = 'scale(0.75)';
    body.style.transformOrigin = 'top center';
  } else if (width <= 600) {
    body.style.transform = 'scale(0.5)';
    body.style.transformOrigin = 'top center';
  } else {
    body.style.transform = '';
  }
}

// Add event listeners for resizing and loading
window.addEventListener('resize', adjustPageWidth);
window.addEventListener('load', adjustPageWidth);
