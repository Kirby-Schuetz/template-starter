import './App.css';
import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Workspace from "./components/Workspace";
import Projects from "./components/Projects";
import Homepage from "./components/Homepage";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </>
  )
}
export default App;