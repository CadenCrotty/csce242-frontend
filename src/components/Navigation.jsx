import {Link} from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <ul className="colums">
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