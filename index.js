// Get reference to elements using the DOM Selectors
const toggleButton = document.getElementById("toggleBtn");
const moreInfo = document.getElementById("moreInfo");

// Add event listener to respond to button clicks
toggleButton.addEventListener("click", function(){
    // Check if the "moreInfo" paragraph is currently hidden
    const isHidden = moreInfo.classList.contains("hidden");

    // Toggle the visibility by adding or removing the class
    if(isHidden){
        moreInfo.classList.remove("hidden");    // Show info
        toggleButton.textContent = "Show Less";  // Update button label
    }else{
        moreInfo.classList.add("hidden");   // Hide info
        toggleButton.textContent = "Show More"; // Revert button label
    }
});