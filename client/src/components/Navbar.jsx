import { Link } from "react-router-dom";
import logo from "../assets/pageCraftLogo.png";
import projects from "../assets/projectsIcon.png";
import create from "../assets/createIcon.png";
import "../App.css";

export default function Navbar() {
    return (
        <div className="nav-bar">
            <Link to="/"><img className= "logo" style={{ width: 180, height: 180}} src={logo} alt="Logo" /> </Link>
           <ul>
           <Link to="/projects"><img className= "projects" style={{ width: 100}} src={projects} alt="projects" /></Link>
           <Link to="/workspace"><img className= "create" style={{ width: 100}} src={create} alt="create" /></Link>
           </ul>

         
        </div>
    )
}