document.addEventListener("DOMContentLoaded", function () {
    let showPopupBtn = document.querySelector(".popup-btn");
    let popup = document.querySelector(".cover");
    let closePopupBtn = document.querySelector(".close");

    // Show popup with zoom-in effect
    showPopupBtn.addEventListener("click", function () {
        popup.style.display = "flex";
        setTimeout(() => {
            popup.classList.add("active");
        }, 10);
    });

    // Close popup
    closePopupBtn.addEventListener("click", function () {
        popup.classList.remove("active");
        setTimeout(() => {
            popup.style.display = "none";
        }, 300);
    });

    // Close when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("active");
            setTimeout(() => {
                popup.style.display = "none";
            }, 300);
        }
    });
});

$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }
