// Get all signup buttons
const signupButtons = document.querySelectorAll(".btn-getstarted");
const popup = document.getElementById("signupPopup");
const closeBtn = document.querySelector(".close");

// Open popup when clicking any signup button
signupButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        popup.style.display = "flex";
    });
});

// Close popup when clicking the close button
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close popup when clicking outside of the form
window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});



