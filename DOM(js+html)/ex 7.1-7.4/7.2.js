document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickButton");
    button.innerHTML = "Orange";
    button.addEventListener("click", () => {
        document.body.style.backgroundColor = "orange";
      });
    });