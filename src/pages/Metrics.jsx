function Metrics() {
  const data = [
    { algo: "BFS", time: 3, memory: 4, speed: 4 },
    { algo: "DFS", time: 3, memory: 2, speed: 5 },
    { algo: "Dijkstra", time: 4, memory: 4, speed: 3 },
    { algo: "A*", time: 4, memory: 5, speed: 5 },
    { algo: "Greedy", time: 5, memory: 3, speed: 5 },
  ];

  const container = {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const title = {
    fontSize: "28px",
    color: "#111827",
    marginBottom: "8px",
  };

  const subtitle = {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "20px",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "14px",
  };

  const th = {
    textAlign: "left",
    padding: "12px",
    background: "#f3f4f6",
    borderBottom: "1px solid #e5e7eb",
  };

  const td = {
    padding: "12px",
    borderBottom: "1px solid #e5e7eb",
    color: "#374151",
  };

  const rowHover = {
    cursor: "default",
  };

  return (
    <div style={container}>
      <h1 style={title}>Performance Metrics Dashboard</h1>
      <p style={subtitle}>
        Comparison of algorithms based on time complexity efficiency, memory usage,
        and execution speed (scaled 1–5).
      </p>

      <table style={table}>
        <thead>
          <tr>
            <th style={th}>Algorithm</th>
            <th style={th}>Time</th>
            <th style={th}>Memory</th>
            <th style={th}>Speed</th>
          </tr>
        </thead>

        <tbody>
          {data.map((d) => (
            <tr key={d.algo} style={rowHover}>
              <td style={td}><b>{d.algo}</b></td>
              <td style={td}>{d.time}/5</td>
              <td style={td}>{d.memory}/5</td>
              <td style={td}>{d.speed}/5</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Metrics;