import './Header.scss';
import Search from '../Search';
import Logo from '../../assets/rickmorty.svg';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Header = ({ setName }) => {
    return (
        <div className="Header">
            <Link to="/">
                <img src={Logo} className="Header__logo" />
            </Link>
            <Search className="searchMore" setName={setName} />
        </div>
    );
};

export default Header;

Header.propTypes = {
    setName: PropTypes.func.isRequired,
};
