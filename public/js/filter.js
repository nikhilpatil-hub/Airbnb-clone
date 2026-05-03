const filters = document.querySelectorAll(".filter");
function applyStyles(selectedFilter) {
  filters.forEach((f) => f.classList.remove("selectedFilter"));
  const selectedElement = document.querySelector("." + selectedFilter);
  if (window.location.pathname === "/listings") {
    filters[0].classList.add("selectedFilter");
    return;
  }
  if (selectedElement) {
    selectedElement.classList.add("selectedFilter");
  }
}

filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    const element = this.classList[1];
    console.log(element);
    localStorage.setItem("selectedFilter", element);
    applyStyles(element);
  });
});

const storedFilter = localStorage.getItem("selectedFilter");
if (storedFilter) {
  applyStyles(storedFilter);
}

let filtersBox = document.querySelector("#filters");
let buttonSlide = document.querySelectorAll("#slideButton");

buttonSlide.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.className == "left_img_button" ? -1 : 1;
    const scrollImg = direction * (filtersBox.clientWidth - 100);
    filtersBox.scrollBy({ left: scrollImg, behavior: "smooth" });
  });
});

filtersBox.addEventListener("scroll", () => {
  buttonSlide[0].style.display = filtersBox.scrollLeft <= 0 ? "none" : "flex";
  buttonSlide[1].style.display =
    filtersBox.scrollLeft >= filtersBox.scrollWidth - filtersBox.clientWidth - 5
      ? "none"
      : "flex";
  console.log(filtersBox.scrollWidth);
  console.log(filtersBox.scrollWidth - filtersBox.clientWidth);
});
