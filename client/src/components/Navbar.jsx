import { Link } from "react-router-dom";
import homeIcon from "../assets/homeIcon.png";
import "../App.css";

export default function Navbar() {
    return (
        <div className="background-container">
            <Link to="/" className="navLogo" >
            <img src={homeIcon} alt="pagecraft logo" width="200" height="300" />
          </Link>

          {/* project title */}
          {/* undo button */}
          {/* redo button */}
        </div>
    )
}