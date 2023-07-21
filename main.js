// main.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the list of sections (dt elements) from the HTML document
    const sectionsList = document.querySelectorAll(".words dt");
  
    // Create an array to store section objects with name and description
    const sectionsArray = [];
  
    // Populate the sectionsArray with objects
    sectionsList.forEach(function (section) {
      const name = section.innerText;
      const description = section.nextElementSibling.innerText;
      sectionsArray.push({ name, description });
    });
  
    // Sort the sectionsArray alphabetically based on section names
    sectionsArray.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  
    // Clear the current order of sections
    const parentElement = sectionsList[0].parentElement;
    parentElement.innerHTML = "";
  
    // Reinsert the sorted sections back into the parent element with proper links
    sectionsArray.forEach(function (section) {
      const dtElement = document.createElement("dt");
      const ddElement = document.createElement("dd");
  
      const link = document.createElement("a");
      link.href = section.name.toLowerCase().replace(/\s+/g, "") + ".html";
      link.textContent = section.name;
      dtElement.appendChild(link);
  
      ddElement.textContent = section.description;
  
      parentElement.appendChild(dtElement);
      parentElement.appendChild(ddElement);
    });
  });
  
      // Add the name of the current page on the breadcrumb menu


  function getCurrentPageName() {
    const urlPath = window.location.pathname;
    const currentPage = urlPath.split('/').pop().split('.html')[0];
    return currentPage;
  }
  
  function updateBreadcrumbMenu() {
    const currentPageName = getCurrentPageName();
    const currentPageSpan = document.getElementById('current-page-name');
    currentPageSpan.textContent = currentPageName.toUpperCase();
  }
  
  document.addEventListener('DOMContentLoaded', updateBreadcrumbMenu);
  window.onpopstate = updateBreadcrumbMenu;
  