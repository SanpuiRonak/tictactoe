window.onload = () => {
  main();
};

let girdState = new Array(9);
girdState.fill(-1);
let turn = 0;
let usedGrid = new Set();

function main() {
  const table = document.getElementsByClassName("grid");

  for (grid of table) {
    grid.addEventListener("click", (element) => display(element).then(check()));
  }
}

function display(element) {
  return new Promise(() => {
    const grid = document.getElementById(element.target.id);
    console.log(grid.id);

    if (usedGrid.has(grid.id)) return;

    if (turn % 2 === 0) {
      grid.style.backgroundImage = "url(./resources/cross.png)";
      girdState[grid.id - 1] = 1;
    } else {
      grid.style.backgroundImage = "url(./resources/circle.png)";
      girdState[grid.id - 1] = 0;
    }

    usedGrid.add(grid.id);
    turn++;

    console.log(girdState);
  });
}

function check() {
  const ar = girdState;
  console.log("checking");

  for (i = 0; i <= 6; i += 3) {
    if (
      (ar[i] === 0 || ar[i] === 1) &&
      ar[i] === ar[i + 1] &&
      ar[i] === ar[i + 2]
    ) {
      console.log(`Victory row ${i / 3 + 1}`);
    }
  }
}
