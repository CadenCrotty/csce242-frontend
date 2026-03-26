import {Link} from "react-router-dom";
import "../css/Navigation.css";
import {useState} from "react";

const Navigation = () => {
        const [menuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
            console.log(menuOpen);
        };
    return (
        <nav id="main-nav">
            <a id="toggle-nav" onClick={toggleMenu} href="#"></a>
                {menuOpen?(<p>&#8963;</p>):(<p>&#8964;</p>)}

            <ul className={menuOpen?"columns":"hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Rock</Link></li>
                <li><Link to="/listings">Country</Link></li>
                <li><Link to="/listings">Jazz</Link></li>
                <li><Link to="/listings">Soul</Link></li>
                <li><Link to="/listings">Reggae</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;