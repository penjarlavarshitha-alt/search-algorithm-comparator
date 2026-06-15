import { Link } from "react-router-dom";

function Home() {
  const container = {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  };

  const title = {
    fontSize: "34px",
    color: "#111827",
    marginBottom: "8px",
  };

  const subtitle = {
    fontSize: "15px",
    color: "#4b5563",
    marginBottom: "40px",
  };

  const card = {
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "18px",
    background: "#fff",
    width: "260px",
    textAlign: "left",
    margin: "0 auto",
  };

  const link = {
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    color: "#111827",
  };

  const desc = {
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "8px",
    lineHeight: "1.5",
  };

  return (
    <div style={container}>
      <h1 style={title}>Search Algorithm Dashboard</h1>
      <p style={subtitle}>
        Understand and compare BFS, DFS, Dijkstra, A*, Greedy and Searching Algorithms.
      </p>

      {/* TOP CENTER */}
      <div style={{ marginBottom: "20px" }}>
        <div style={card}>
          <Link to="/analysis" style={link}>Analysis →</Link>
          <p style={desc}>
            View time complexity, space usage, optimality and real-world usage.
          </p>
        </div>
      </div>

      {/* MIDDLE (slightly offset left/right) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          gap: "20px",
        }}
      >
        <div style={{ ...card, marginLeft: "40px" }}>
          <Link to="/metrics" style={link}>Metrics →</Link>
          <p style={desc}>
            Analyze execution time, memory usage, and nodes explored.
          </p>
        </div>

        <div style={{ ...card, marginRight: "40px" }}>
          <Link to="/compare" style={link}>Compare →</Link>
          <p style={desc}>
            Compare two algorithms side by side.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;