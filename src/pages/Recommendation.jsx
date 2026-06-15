import { useState } from "react";

function Recommendation() {
  const [problemType, setProblemType] = useState("");
  const [priority, setPriority] = useState("");
  const [result, setResult] = useState(null);

  const recommendAlgorithm = () => {
    let recommendation = {};

    if (problemType === "Path Finding" && priority === "Speed") {
      recommendation = {
        name: "A* Search",
        reason:
          "Fast and optimal pathfinding using heuristics (best for GPS and games).",
      };
    } else if (problemType === "Path Finding" && priority === "Simplicity") {
      recommendation = {
        name: "BFS",
        reason:
          "Simple algorithm that guarantees shortest path in unweighted graphs.",
      };
    } else if (problemType === "Path Finding" && priority === "Accuracy") {
      recommendation = {
        name: "Dijkstra / A* Search",
        reason:
          "Highly accurate shortest path algorithms for weighted graphs.",
      };
    } else if (problemType === "Sorted Data") {
      recommendation = {
        name: "Binary Search",
        reason: "Very fast O(log n) search but requires sorted data.",
      };
    } else if (problemType === "Unsorted Data") {
      recommendation = {
        name: "Linear Search",
        reason: "Simple search that works on unsorted data.",
      };
    } else if (problemType === "Memory Efficient") {
      recommendation = {
        name: "DFS",
        reason: "Uses less memory compared to BFS.",
      };
    } else if (problemType === "Heuristic Search") {
      recommendation = {
        name: "Heuristic Search",
        reason:
          "Uses heuristic function to make intelligent decisions. Fast but not always optimal.",
      };
    } else {
      recommendation = {
        name: "A* / Binary / Linear Search",
        reason:
          "Choose based on problem: A* for pathfinding, Binary for sorted data, Linear for unsorted data.",
      };
    }

    setResult(recommendation);
  };

  const page = {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "700px",
    margin: "0 auto",
  };

  const card = {
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "20px",
    background: "#ffffff",
  };

  const title = {
    fontSize: "28px",
    color: "#111827",
    marginBottom: "15px",
  };

  const label = {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "6px",
    display: "block",
  };

  const select = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    marginBottom: "15px",
    background: "#fff",
  };

  const button = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#111827",
    color: "white",
    cursor: "pointer",
    marginTop: "10px",
  };

  const resultBox = {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "10px",
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
  };

  return (
    <div style={page}>
      <h1 style={title}>Recommendation Engine</h1>

      <div style={card}>
        {/* Problem Type */}
        <label style={label}>Problem Type</label>
        <select
          style={select}
          value={problemType}
          onChange={(e) => setProblemType(e.target.value)}
        >
          <option value="">Select Problem Type</option>
          <option>Path Finding</option>
          <option>Sorted Data</option>
          <option>Unsorted Data</option>
          <option>Memory Efficient</option>
          <option>Heuristic Search</option>
          <option>Optimal Path Finding</option>
        </select>

        {/* Priority */}
        <label style={label}>Priority</label>
        <select
          style={select}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Select Priority</option>
          <option>Speed</option>
          <option>Accuracy</option>
          <option>Simplicity</option>
        </select>

        <button style={button} onClick={recommendAlgorithm}>
          Recommend Algorithm
        </button>

        {/* RESULT */}
        {result && (
          <div style={resultBox}>
            <h2 style={{ marginBottom: "8px" }}>⭐ {result.name}</h2>
            <p style={{ margin: 0, color: "#374151" }}>
              {result.reason}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recommendation;