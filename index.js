// JavaScript code for adding the active class on scroll
// Get the navbar and the links
var navbar = document.getElementById("nav-manu-1");
var links = navbar.getElementsByTagName("a");

// Get the sections
var sections = document.getElementsByClassName("hide");

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
  // Loop through the sections
  for (var i = 0; i < sections.length; i++) {
    // Get the top offset and the height of the section
    var top = sections[i].offsetTop;
    var height = sections[i].offsetHeight;

    // Check if the window scroll position is within the section
    if (window.pageYOffset >= top - height / 2 && window.pageYOffset < top + height / 2) {
      // Get the id of the section
      var id = sections[i].id;

      // Loop through the links
      for (var j = 0; j < links.length; j++) {
        // Remove the active class from all links
        links[j].classList.remove("active");

        // Add the active class to the link that matches the section id
        if (links[j].href.includes(id)) {
          links[j].classList.add("active");
        }
      }
    }
  }
});
