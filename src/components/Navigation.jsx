import {Link} from "react-router-dom";
import "../css/Navigation.css";
import {useState} from "react";

const Navigation = () => {
        const [menuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
            
        };
    return (
        <nav id="main-nav">
            <div id="toggle" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul id="nav-items" className={menuOpen ? "" : "hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Rock</Link></li>
                <li><Link to="/Country">Country</Link></li>
                <li><Link to="/Jazz">Jazz</Link></li>
                <li><Link to="/Soul">Soul</Link></li>
                <li><Link to="/Reggae">Reggae</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;