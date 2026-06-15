import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Search AI</h2>

      <Link to="/">Home</Link>
      <Link to="/compare">Compare Algorithms</Link>
      <Link to="/metrics">Performance Metrics</Link>
      <Link to="/analysis">Algorithm Analysis</Link>
      <Link to="/about">About</Link>
      <Link to="/recommendation">Recommendation</Link>
    </div>
  );
}

export default Sidebar;