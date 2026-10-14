const fs = require("fs");

function iterativeDeepeningSearch(size) {
  for (let depth = 0; ; depth++) {
    const initialPlacement = generateRandomPlacement(size);
    const result = depthLimitedSearch(initialPlacement, size, depth);
    if (result !== "cutoff") {
      return result;
    }
  }
}

function generateRandomPlacement(size) {
  const randomPlacement = [];
  for (let i = 0; i < size; i++) {
    randomPlacement.push(Math.floor(Math.random() * size));
  }
  return randomPlacement;
}

function depthLimitedSearch(initialState, size, maxDepth) {
  let stack = [{ state: initialState, depth: 0, path: [initialState] }];

  while (stack.length > 0) {
    let { state, depth, path } = stack.pop();

    if (depth === maxDepth && isGoalState(state, size)) {
      return { state, path };
    } else if (depth < maxDepth) {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const newState = [...state];
          newState[i] = j;
          stack.push({
            state: newState,
            depth: depth + 1,
            path: [...path, newState],
          });
        }
      }
    }
  }

  return "cutoff";
}

function generateChildren(state, size) {
  const children = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const newState = [...state];
      newState[i] = j;
      children.push(newState);
    }
  }
  return children;
}

function isGoalState(state, size) {
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (state[i] === state[j] || Math.abs(state[i] - state[j]) === j - i) {
        return false;
      }
    }
  }
  return true;
}

function displayBoard(state) {
  const size = state.length;
  let boardStr = "";
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += state[i] === j ? " * " : " - ";
    }
    boardStr += row + "\n";
  }
  return boardStr;
}

function writeSolutionToFile(filename, solution) {
  fs.writeFileSync(filename, solution, "utf8");
}

function readInputFromFile(filename) {
  const data = fs.readFileSync(filename, "utf8");
  return parseInt(data.trim(), 10);
}

function showSolution() {
  const size = readInputFromFile("input.txt");
   const { state, path } = iterativeDeepeningSearch(size);
  const solutionBoard = displayBoard(state);
  console.log(solutionBoard);

   const solutionText = `Path:\n${path
     .map(displayBoard)
     .join("\n")}\n\nSolution:\n${solutionBoard}`;
  writeSolutionToFile("output.txt", solutionText);
}

showSolution();
