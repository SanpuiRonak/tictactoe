window.onload = () => {
  main();
};

function main() {
  const table = document.getElementsByClassName("grid");
  //   console.log(table);
  for (grid of table) {
    grid.addEventListener("click", (element) => display(element));
  }
}
let turn = 0;
function display(element) {
  const grid = document.getElementById(element.target.id);
  console.log(grid.id);
  if (turn % 2 === 0) {
    grid.style.backgroundImage = "url(./resources/cross.png)";
  } else {
    grid.style.backgroundImage = "url(./resources/circle.png)";
  }
  turn++;
}
