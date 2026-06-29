import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Metrics from "./pages/Metrics";
import Analysis from "./pages/Analysis";
import About from "./pages/About";
import Recommendation from "./pages/Recommendation";

function App() {
  return (
    <BrowserRouter basename="/search-algorithm-comparator">
      <div className="layout">
        <Sidebar />

        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/metrics" element={<Metrics />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/about" element={<About />} />
            <Route path="/recommendation" element={<Recommendation />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;