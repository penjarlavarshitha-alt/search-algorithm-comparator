function About() {
  const container = {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: "1.6",
  };

  const title = {
    fontSize: "30px",
    color: "#111827",
    marginBottom: "10px",
  };

  const section = {
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "18px",
    marginBottom: "15px",
    background: "#ffffff",
  };

  const heading = {
    fontSize: "18px",
    marginBottom: "8px",
    color: "#111827",
  };

  const text = {
    fontSize: "14px",
    color: "#4b5563",
  };

  const list = {
    fontSize: "14px",
    color: "#374151",
    paddingLeft: "18px",
    marginTop: "8px",
  };

  return (
    <div style={container}>
      <h1 style={title}>About Search Algorithm Visualizer</h1>

      {/* PURPOSE */}
      <div style={section}>
        <h2 style={heading}>🎯 Purpose of this Project</h2>
        <p style={text}>
          The main goal is to simplify complex computer science concepts by showing
          how algorithms process data, how decisions are made, and how performance
          differs between approaches.
        </p>
      </div>

      {/* ALGORITHMS */}
      <div style={section}>
        <h2 style={heading}>📊 Algorithms Included</h2>
        <ul style={list}>
          <li><b>Linear Search</b> – checks each element one by one</li>
          <li><b>Binary Search</b> – divide and conquer on sorted data</li>
          <li><b>BFS</b> – explores level by level in graphs</li>
          <li><b>DFS</b> – deep traversal before backtracking</li>
          <li><b>Dijkstra</b> – shortest path in weighted graphs</li>
          <li><b>A*</b> – heuristic-based optimal pathfinding</li>
          <li><b>Heuristic Search</b> – decision-based intelligent search</li>
        </ul>
      </div>

      {/* FEATURES */}
      <div style={section}>
        <h2 style={heading}>⚙️ Features</h2>
        <ul style={list}>
          <li>Step-by-step visualization of algorithms</li>
          <li>Algorithm recommendation system</li>
          <li>Comparison between different techniques</li>
          <li>Interactive UI with routing between pages</li>
          <li>Real-time simulation of searching process</li>
        </ul>
      </div>

      {/* LEARNING */}
      <div style={section}>
        <h2 style={heading}>🧠 What You Learn</h2>
        <ul style={list}>
          <li>Time and space complexity</li>
          <li>Brute force vs optimized approaches</li>
          <li>Graph and array traversal techniques</li>
          <li>Real-world algorithm applications</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <div style={section}>
        <h2 style={heading}>📌 Summary</h2>
        <p style={text}>
          This project acts as a learning platform for understanding fundamental
          algorithms used in computer science, interviews, and real-world systems
          like navigation, AI search, and data processing.
        </p>
      </div>
    </div>
  );
}

export default About;