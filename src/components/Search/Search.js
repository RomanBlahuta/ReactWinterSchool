import './Search.scss';
import SearchIcon from '../../assets/search.svg';
import _ from 'lodash';

const Search = ({ className, setName }) => {
    const changeName = (event) => {
        setName(event.target.value);
    };

    const handleNameChange = _.debounce(changeName, 500);

    return (
        <div className={`Search__${className}`}>
            <img src={SearchIcon} className="Search__icon" />
            <input
                className="Search__input"
                placeholder="Search by name"
                defaultValue=""
                onChange={handleNameChange}
            ></input>
        </div>
    );
};

export default Search;
