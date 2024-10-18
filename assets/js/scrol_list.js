// Get all buttons with links to sections
const buttons = document.querySelectorAll('nav a');
const offset = 100; // величина смещения в пикселях

// Add an event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the target section id
    const targetId = button.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Get the target section's top position
    const targetTop = targetSection.offsetTop;

    // Smooth scrolling effect
    window.scrollTo({
      top: targetTop - offset,
      behavior: 'smooth'
    });
  });
});