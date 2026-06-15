import { useState } from "react";

function Analysis() {
  const [algo, setAlgo] = useState("BFS");

  const data = {
    BFS: {
      type: "Breadth First Search",
      use: "Shortest path in unweighted graphs",
      strategy: "Level by level traversal",
      pros: "Complete, optimal (unweighted)",
      cons: "High memory usage",
    },
    DFS: {
      type: "Depth First Search",
      use: "Maze solving, backtracking",
      strategy: "Deep exploration first",
      pros: "Low memory",
      cons: "May not find shortest path",
    },
    Dijkstra: {
      type: "Shortest Path Algorithm",
      use: "Maps, GPS navigation",
      strategy: "Greedy + priority queue",
      pros: "Always optimal",
      cons: "Slower than BFS",
    },
    "A*": {
      type: "Heuristic Search",
      use: "AI pathfinding, games",
      strategy: "Cost + heuristic",
      pros: "Very efficient",
      cons: "Needs good heuristic",
    },
    Greedy: {
      type: "Greedy Search",
      use: "Approximation problems",
      strategy: "Local best choice",
      pros: "Fast",
      cons: "Not always optimal",
    },
  };

  const page = {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const title = {
    fontSize: "28px",
    color: "#111827",
    marginBottom: "15px",
  };

  const select = {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    marginBottom: "20px",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  };

  const box = {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "14px",
    background: "#ffffff",
  };

  const label = {
    fontSize: "12px",
    color: "#6b7280",
    marginBottom: "5px",
  };

  const value = {
    fontSize: "14px",
    color: "#111827",
    fontWeight: "500",
  };

  const headerBox = {
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "20px",
    background: "#f9fafb",
  };

  return (
    <div style={page}>
      <h1 style={title}>Algorithm Analysis</h1>

      <select style={select} value={algo} onChange={(e) => setAlgo(e.target.value)}>
        {Object.keys(data).map((key) => (
          <option key={key}>{key}</option>
        ))}
      </select>

      {/* HEADER CARD */}
      <div style={headerBox}>
        <h2 style={{ margin: 0 }}>{algo}</h2>
        <p style={{ margin: "5px 0", color: "#6b7280" }}>
          {data[algo].type}
        </p>
      </div>

      {/* GRID DETAILS */}
      <div style={grid}>
        <div style={box}>
          <div style={label}>USE CASE</div>
          <div style={value}>{data[algo].use}</div>
        </div>

        <div style={box}>
          <div style={label}>STRATEGY</div>
          <div style={value}>{data[algo].strategy}</div>
        </div>

        <div style={box}>
          <div style={label}>PROS</div>
          <div style={value}>{data[algo].pros}</div>
        </div>

        <div style={box}>
          <div style={label}>CONS</div>
          <div style={value}>{data[algo].cons}</div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;