import "./css/style.css"; //importing css

const modal = document.getElementById("myModal");

let promiseOfModal = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("block");
  }, 1000 * 60);
});

promiseOfModal.then((result) => {
  modal.style.display = result;
});

// Bonus:
modal.addEventListener("click", () => {
  modal.style.display = "none";
});
