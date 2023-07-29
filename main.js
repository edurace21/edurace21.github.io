function toggle() {
    var content = document.getElementById("bio-content");
    if (content.style.display === "none") {
      content.style.display = "block";
      content.style.transition = "all 1s ease-in-out";
    } else {
      content.style.display = "none";
    }
  }
  
  document.getElementById("bio-btn").addEventListener("click", toggle);