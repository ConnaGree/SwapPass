const tiles = document.querySelectorAll(".tile__item img");
const numberPass = document.querySelectorAll(".number");
const letterPass = document.querySelectorAll(".letter");

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
];

const applyDrag = (element) => {
  let dragged;

  element.forEach((ele) => {
    ele.addEventListener("dragstart", (e) => {
      dragged = e.target;
      // console.log(dragged);
      console.log("start");
    });

    ele.addEventListener("dragend", () => {
      console.log("end");
    });

    ele.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    ele.addEventListener("dragenter", (e) => {
      e.preventDefault();
      e.target.classList.add("hovered");
      dragged.classList.remove("hovered");

      console.log(e.target);
    });

    ele.addEventListener("dragleave", (e) => {
      e.target.classList.remove("hovered");
    });

    ele.addEventListener("drop", (e) => {
      e.preventDefault();
      e.target.classList.remove("hovered");
      dragged.classList.remove("hovered");

      temp = dragged.innerHTML;
      dragged.innerHTML = e.target.innerHTML;
      e.target.innerHTML = temp;

      // console.log(e.target);
      // console.log(e.target.innerHTML);
    });
  });
};

applyDrag(tiles);
applyDrag(numberPass);
applyDrag(letterPass);

// Needs Function
