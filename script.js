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
  Promise.all([checkRow(), checkCol()]);
  console.log("async ok");
}

function checkRow() {
  return new Promise(() => {
    for (i = 0; i <= 6; i += 3) {
      if (
        (girdState[i] === 0 || girdState[i] === 1) &&
        girdState[i] === girdState[i + 1] &&
        girdState[i] === girdState[i + 2]
      ) {
        console.log(`Victory row ${i / 3 + 1}`);
      }
    }
  });
}

function checkCol() {
  return new Promise(() => {
    for (i = 0; i <= 2; i++) {
      if (
        (girdState[i] === 0 || girdState[i] === 1) &&
        girdState[i + 3] === girdState[i] &&
        girdState[i + 6] === girdState[i]
      ) {
        console.log(`Victory col ${i + 1}`);
      }
    }
  });
}
