# ♟️ N-Queens Problem Using Iterative Deepening Search

A JavaScript implementation of the **N-Queens problem** using the Iterative Deepening Search (IDS) algorithm.

The goal of this project is to explore how an uninformed search algorithm can be used to solve a classic Artificial Intelligence problem. The program searches for a valid board configuration where no two queens attack each other.

## 📌 About the Project

The N-Queens problem is a well-known puzzle in computer science. The challenge is to place `N` queens on an `N × N` chessboard so that no two queens share the same row, column, or diagonal.

This project uses **Iterative Deepening Search (IDS)**, which combines the depth-limited nature of Depth-First Search (DFS) with the increasing depth limits of iterative search.

At each iteration, the algorithm runs a depth-limited search with a larger depth limit until it finds a valid solution.

## ⚙️ How It Works

The program follows these steps:

1. **Read the input:** Load the board size `N` from `input.txt`.
2. **Generate an initial state:** Create a random placement of queens, represented as an array.
3. **Start iterative deepening:** Run depth-limited searches with increasing depth limits, starting from zero.
4. **Explore possible states:** Generate new states by changing the row position of a queen.
5. **Check the goal state:** Verify that no two queens share a column or diagonal.
6. **Display and save the result:** Print the solution board in the console and save the search path and final solution to `output.txt`.

### 🧠 State Representation

The board is represented by an array of integers.

For example:

`[1, 3, 0, 2]`

This represents a 4 × 4 board, where each array index identifies a row and each value identifies the column containing a queen.

The program uses the following symbols when displaying the board:

- `*` — A queen is placed in this position.
- `-` — An empty square.

### 🔍 Goal Test

A state is considered a solution when no two queens attack each other.

The program checks that:

- No two queens occupy the same column.
- No two queens share a diagonal.

Since the representation places exactly one queen in each row, row conflicts are avoided by design.

## 🛠️ Technologies Used

- **JavaScript (Node.js)**
- **File System (`fs`)** for reading input and writing output
- **Iterative Deepening Search (IDS)**
- **Depth-Limited Search (DLS)**

## 🚀 Getting Started

### Prerequisites

Make sure [Node.js](https://nodejs.org/) is installed on your system.

## 📊 Example

For an input of `4`, one possible solution is:

```text
-  *  -  -
-  -  -  *
*  -  -  -
-  -  *  -
```

The exact solution may vary depending on the search order and the initial random placement.

## 📚 What I Learned

Working on this project helped me explore:

- How Iterative Deepening Search works.
- How depth-limited search explores a state space.
- How to represent a chessboard as an array.
- How to define goal states and validate constraints.
- How to work with file input and output in Node.js.

It is a small project, but it provides a practical way to connect search algorithms with a classic AI problem.

## ⚠️ Notes and Limitations

- The board size must be a positive integer.
- The 2-Queens and 3-Queens problems have no solution, while the 1-Queen problem has a valid solution.
- The current implementation uses a straightforward state-space search, which can become extremely expensive for larger board sizes.
- The implementation restarts from a randomly generated initial state at each depth limit. This is part of the current implementation and is not the standard way IDS is usually structured.

---

**Built as a learning project to practice Artificial Intelligence search algorithms with JavaScript.**
