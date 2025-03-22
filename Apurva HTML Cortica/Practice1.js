document.addEventListener("DOMContentLoaded", function () {
    const membershipOptions = document.querySelectorAll("input[name='membership']");
    const bookBundle = document.getElementById("book-bundle");
    const revenueCycleSubscription = document.querySelector("input[value='189.99']");
    const webinarSelect = document.getElementById("webinar");

    const membershipCostEl = document.getElementById("membership-cost");
    const addonsCostEl = document.getElementById("addons-cost");
    const totalPriceEl = document.getElementById("total-price");

    function updateTotal() {
        let membershipCost = parseFloat(document.querySelector("input[name='membership']:checked").value);
        let addonsCost = 0;

        // Check if book bundle is selected
        if (bookBundle.checked) {
            addonsCost += parseFloat(bookBundle.value);
        }

        // Check if Revenue Cycle Insider subscription is selected
        if (revenueCycleSubscription.checked) {
            addonsCost += parseFloat(revenueCycleSubscription.value);
        }

        // Get webinar subscription cost
        let webinarCost = parseFloat(webinarSelect.value);
        addonsCost += webinarCost;

        let totalCost = membershipCost + addonsCost;

        membershipCostEl.textContent = `$${membershipCost.toFixed(2)}`;
        addonsCostEl.textContent = `$${addonsCost.toFixed(2)}`;
        totalPriceEl.textContent = `$${totalCost.toFixed(2)}`;
    }

    // Event Listeners
    membershipOptions.forEach(option => option.addEventListener("change", updateTotal));
    bookBundle.addEventListener("change", updateTotal);
    revenueCycleSubscription.addEventListener("change", updateTotal);
    webinarSelect.addEventListener("change", updateTotal);

    updateTotal(); // Initialize total on page load
});

document.addEventListener("DOMContentLoaded", function () {
    // Get radio buttons and popups
    const individualRadio = document.getElementById("individual");
    const studentRadio = document.getElementById("student");

    const individualPopup = document.getElementById("individual-popup");
    const studentPopup = document.getElementById("student-popup");
    const closeIndividualPopup = document.getElementById("close-individual-popup");
    const closeStudentPopup = document.getElementById("close-student-popup");

    // Show Individual Popup when selected
    individualRadio.addEventListener("change", function () {
        if (individualRadio.checked) {
            individualPopup.style.display = "flex";
        }
    });

    // Show Student Popup when selected
    studentRadio.addEventListener("change", function () {
        if (studentRadio.checked) {
            studentPopup.style.display = "flex";
        }
    });

    // Close Individual Popup when Close button is clicked
    closeIndividualPopup.addEventListener("click", function () {
        individualPopup.style.display = "none";
        individualRadio.checked = false;
    });

    // Close Student Popup when Close button is clicked
    closeStudentPopup.addEventListener("click", function () {
        studentPopup.style.display = "none";
        studentRadio.checked = false;
    });

    // Close popups if clicked outside the popup
    window.addEventListener("click", function (event) {
        if (event.target === individualPopup) {
            individualPopup.style.display = "none";
            individualRadio.checked = false;
        }
        if (event.target === studentPopup) {
            studentPopup.style.display = "none";
            studentRadio.checked = false;
        }
    });
});

