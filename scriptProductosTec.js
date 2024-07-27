 // Get the menu items
const menuItems = document.querySelectorAll('.menu-lateral-Tec li a');

// Get the content sections
const contentSections = document.querySelectorAll('.seccion');

// Add event listener to each menu item
menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', (event) => {
    // Prevent default link behavior (preventing page jump)
    event.preventDefault();

    // Get the clicked menu item's data-target attribute (section ID)
    const sectionId = menuItem.getAttribute('href');

    // Get the corresponding content section element
    const contentSection = document.querySelector(sectionId);

    // Remove the active class from all content sections
    contentSections.forEach(section => section.classList.remove('active'));

    // Add the active class to the clicked section
    contentSection.classList.add('active');
  });
});
