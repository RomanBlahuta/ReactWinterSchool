import "./Header.scss";
import Search from "../Search";
import Logo from "../../assets/rickmorty.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Link to="/">
                <img src={Logo} className="Header__logo" />
            </Link>
            <Search className="searchMore"></Search>
        </div>
    );
};

export default Header;
