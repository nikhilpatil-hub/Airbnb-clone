const deleteFnx = document.querySelector(".delete-fnx");
const deleteButton = document.querySelector("#delete-confirm");
const cancleButton = document.querySelector(".cancle-confirm");

if (deleteButton) {
  deleteButton.addEventListener("click", () => {
    deleteFnx.style.display = "flex";
  });
}

if (cancleButton) {
  cancleButton.addEventListener("click", () => {
    deleteFnx.style.display = "none";
  });
}

const deleteButtons = document.querySelectorAll("#delete-confirm");
const cancleButtons = document.querySelectorAll(".cancle-confirm");

if (deleteButtons.length > 0) {
  for (const button of deleteButtons) {
    button.addEventListener("click", () => {
      button.nextSibling.nextSibling.firstChild.nextSibling.style.display = "flex";
    });
  }
}

if (cancleButtons.length > 0) {
  for (const cancleBtn of cancleButtons) {
    cancleBtn.addEventListener("click", () => {
      cancleBtn.parentElement.style.display = "none";
    });
  }
}