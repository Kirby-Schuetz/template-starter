import { Link } from "react-router-dom";
import logo from "../assets/pageCraftLogo.png";
import books from "../assets/books.png";
import bookshelf from "../assets/bookshelf.png";
import "../App.css";

export default function Navbar() {
    return (
        <div className="nav-bar">
            <img style={{ width: 180, height: 180}} src={logo} alt="Logo" />
            <img style={{ width: 180, height: 180}} src={bookshelf} alt="Logo" />
            <img style={{ width: 180, height: 180}} src={bookshelf} alt="Logo" />
            <img style={{ width: 180, height: 180}} src={bookshelf} alt="Logo" />
            <img style={{ width: 180, height: 180}} src={bookshelf} alt="Logo" />
            <img style={{ width: 180, height: 180}} src={bookshelf} alt="Logo" />
            <img style={{ width: 180, height: 180}} src={books} alt="Logo" />

          {/* project title */}
          {/* undo button */}
          {/* redo button */}
        </div>
    )
}