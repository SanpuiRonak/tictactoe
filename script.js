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
  Promise.all([checkRow(), checkCol(), checkD()]);
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
        drawSlash("H", i / 3 + 1);
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
        drawSlash("V", i + 1);
        console.log(`Victory col ${i + 1}`);
      }
    }
  });
}

function checkD() {
  return new Promise(() => {
    if (
      (girdState[0] === 0 || girdState[0] === 1) &&
      girdState[4] === girdState[0] &&
      girdState[8] === girdState[0]
    ) {
      drawSlash("D", 1);
      console.log("Victory Diagonal 1");
    } else if (
      (girdState[2] === 0 || girdState[2] === 1) &&
      girdState[4] === girdState[2] &&
      girdState[6] === girdState[2]
    ) {
      drawSlash("D", 2);
      console.log("Victory Diagonal 2");
    }
  });
}

function drawSlash(oreintation, offset) {
  const table = document.getElementById("frame");
  let slash = document.createElement("img");
  slash.src = "./resources/slash.png";

  switch (oreintation) {
    case "H":
      slash.className = "H";
      slash.style.top = `${5 + 10 * (offset - 1) - 0.5}rem`;
      table.appendChild(slash);
      break;

    case "V":
      slash.className = "V";
      slash.style.left = `${5 + 10 * (offset - 1)}rem`;
      table.appendChild(slash);
      break;

    case "D":
      slash.className = `D${offset}`;
      table.appendChild(slash);
      break;

    default:
      break;
  }
}
