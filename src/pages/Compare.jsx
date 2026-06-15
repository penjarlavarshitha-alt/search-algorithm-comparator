import { useState } from "react";

function Compare() {
  const algorithms = [
    "BFS",
    "DFS",
    "Dijkstra",
    "A*",
    "Greedy",
    "Binary Search",
    "Linear Search",
  ];

  const [algo1, setAlgo1] = useState("BFS");
  const [algo2, setAlgo2] = useState("DFS");

  const data = {
    BFS: {
      time: "O(V + E)",
      space: "O(V)",
      optimal: "Yes (Unweighted)",
      complete: "Yes",
      memory: "High",
      strategy: "Level by level traversal",
    },
    DFS: {
      time: "O(V + E)",
      space: "O(V)",
      optimal: "No",
      complete: "No",
      memory: "Low",
      strategy: "Deep first traversal",
    },
    Dijkstra: {
      time: "O(E log V)",
      space: "O(V)",
      optimal: "Yes",
      complete: "Yes",
      memory: "Medium",
      strategy: "Greedy shortest path",
    },
    "A*": {
      time: "O(E log V)",
      space: "High",
      optimal: "Yes",
      complete: "Yes",
      memory: "High",
      strategy: "Heuristic search",
    },
    Greedy: {
      time: "O(E log V)",
      space: "Medium",
      optimal: "No",
      complete: "No",
      memory: "Low",
      strategy: "Local best choice",
    },
    "Binary Search": {
      time: "O(log n)",
      space: "O(1)",
      optimal: "Yes (sorted data)",
      complete: "Yes",
      memory: "Very Low",
      strategy: "Divide and conquer",
    },
    "Linear Search": {
      time: "O(n)",
      space: "O(1)",
      optimal: "Yes (unsorted data)",
      complete: "Yes",
      memory: "Very Low",
      strategy: "Sequential checking",
    },
  };

  const features = ["time", "space", "optimal", "complete", "memory", "strategy"];

  const handleRandomCompare = () => {
    let a = algorithms[Math.floor(Math.random() * algorithms.length)];
    let b = algorithms[Math.floor(Math.random() * algorithms.length)];

    while (a === b) {
      b = algorithms[Math.floor(Math.random() * algorithms.length)];
    }

    setAlgo1(a);
    setAlgo2(b);
  };

  const page = {
    padding: "30px",
    fontFamily: "Arial",
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const title = {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#1f2937",
  };

  const controls = {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
  };

  const select = {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    background: "#fff",
  };

  const button = {
    padding: "8px 12px",
    borderRadius: "6px",
    border: "none",
    background: "#111827",
    color: "white",
    cursor: "pointer",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  };

  const thtd = {
    border: "1px solid #e5e7eb",
    padding: "10px",
    textAlign: "left",
  };

  const headerRow = {
    background: "#f3f4f6",
  };

  return (
    <div style={page}>
      <h1 style={title}>Search Algorithm Comparison</h1>

      <div style={controls}>
        <select style={select} value={algo1} onChange={(e) => setAlgo1(e.target.value)}>
          {algorithms.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>

        <select style={select} value={algo2} onChange={(e) => setAlgo2(e.target.value)}>
          {algorithms.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>

        <button style={button} onClick={handleRandomCompare}>
          🎲 Random Compare
        </button>
      </div>

      <table style={table}>
        <thead>
          <tr style={headerRow}>
            <th style={thtd}>Feature</th>
            <th style={thtd}>{algo1}</th>
            <th style={thtd}>{algo2}</th>
          </tr>
        </thead>

        <tbody>
          {features.map((f) => (
            <tr key={f}>
              <td style={thtd}>{f.toUpperCase()}</td>
              <td style={thtd}>{data[algo1][f]}</td>
              <td style={thtd}>{data[algo2][f]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Compare;