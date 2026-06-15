import { useState } from "react";
import Grid from "../components/Grid";

const ROWS = 10;
const COLS = 10;

function createGrid() {
  const grid = [];

  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < COLS; c++) {
      row.push({
        row: r,
        col: c,
        isStart: r === 0 && c === 0,
        isEnd: r === 9 && c === 9,
        isVisited: false,
      });
    }
    grid.push(row);
  }

  return grid;
}

function Visualizer() {
  const [grid, setGrid] = useState(createGrid());

  // BFS simulation (simple)
  const bfs = async () => {
    const newGrid = grid.map(row => [...row]);

    const queue = [[0, 0]];
    const visited = new Set();

    while (queue.length) {
      const [r, c] = queue.shift();

      const key = `${r}-${c}`;
      if (visited.has(key)) continue;
      visited.add(key);

      newGrid[r][c].isVisited = true;
      setGrid([...newGrid]);

      await new Promise(res => setTimeout(res, 100));

      const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      for (let [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;

        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < ROWS &&
          nc < COLS
        ) {
          queue.push([nr, nc]);
        }
      }
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Algorithm Visualizer (BFS)</h1>

      <button onClick={bfs}>Run BFS</button>

      <div style={{ marginTop: 20 }}>
        <Grid grid={grid} onNodeClick={() => {}} />
      </div>
    </div>
  );
}

export default Visualizer;