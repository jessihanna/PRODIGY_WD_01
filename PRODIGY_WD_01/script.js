const body = document.body;
const headerText = document.getElementById("header-text");

// Hover effect for initial Welcome state
body.addEventListener("mouseover", () => {
  if (headerText.textContent === "Welcome") {
    body.style.backgroundColor = "blue";
    headerText.style.color = "orange";
  }
});

body.addEventListener("mouseout", () => {
  if (headerText.textContent === "Welcome") {
    body.style.backgroundColor = "white";
    headerText.style.color = "black";
  }
});

// Navigation button click events
function changePage(page) {
  switch (page) {
    case 'home':
      body.style.backgroundColor = "lightgreen";
      headerText.textContent = "This is home page";
      headerText.style.color = "white";
      break;
    case 'about':
      body.style.backgroundColor = "maroon";
      headerText.textContent = "About Us";
      headerText.style.color = "white";
      break;
    case 'services':
      body.style.backgroundColor = "goldenrod";
      headerText.textContent = "Our Services";
      headerText.style.color = "white";
      break;
    case 'contact':
      body.style.backgroundColor = "seagreen";
      headerText.textContent = "Contact Us";
      headerText.style.color = "white";
      break;
  }
}
