import './Search.scss';
import SearchIcon from '../../assets/search.svg';

const Search = ({ className }) => {
    return (
        <div className={`Search__${className}`}>
            <img src={SearchIcon} className="Search__icon" />
            <input className="Search__input" placeholder="Search by name"></input>
        </div>
    );
};

export default Search;
