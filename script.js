const open = document.querySelector("#open");
const close = document.querySelector("#close");

const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("move");
  container.classList.remove("move-again");

  open.style.visibility = "hidden";
  close.style.visibility = "visible";
});

close.addEventListener("click", () => {
  container.classList.remove("move");
  container.classList.add("move-again");
  close.style.visibility = "hidden";
  open.style.visibility = "visible";
});
