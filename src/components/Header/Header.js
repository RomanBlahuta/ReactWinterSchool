import "./Header.scss";
import Search from "../Search";
import Logo from "../../assets/rickmorty.svg";

const Header = () => {
    return <div className="Header">
        <img src={Logo} className="Header__logo"/>
        <Search className="searchMore"></Search>
    </div>
}

export default Header;