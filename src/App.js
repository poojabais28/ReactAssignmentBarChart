import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Graph from "./pages/Graph";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/graph/:count" element={<Graph />} />
    </Routes>
  );
}

export default App;