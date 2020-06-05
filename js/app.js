const images = document.querySelectorAll(".image");

function change() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

[...images].map((item) => {
  item.addEventListener("click", change);
});
[...images].map((item) => {
  item.addEventListener("transitionend", toggleActive);
});
