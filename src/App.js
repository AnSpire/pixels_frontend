import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Computers from "./components/Computers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import ComputerPage from "./components/ComputerPageInfo/ComputerPage";
import Monitors from "./components/Monitor/Monitors";
import "./index.css";
function App() {
  return (
    <div className="mx-auto">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Computers" element={<Computers />} />
          <Route path="/Monitors" element={<Monitors />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Computers/:name" element={<ComputerPage />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
