// content.js

// Function to replace the specified div
function replaceDiv() {
  const divToReplace = document.querySelector('[data-name="symbol-list-wrap"]');
  if (divToReplace) {
    divToReplace.innerHTML = "Replacement Text";
  }
}

// Execute replaceDiv function after 5 seconds
setTimeout(replaceDiv, 5000);
