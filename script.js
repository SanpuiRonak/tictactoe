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

function display(element) {
  const grid = document.getElementById(element.target.id);
  console.log(grid.id);
  grid.style.backgroundImage = "url(./resources/circle.png)";
}
