import { Navigation } from "./Components/Navigation";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
