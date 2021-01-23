import './Search.scss'

const Search = ({ className }) => {
    return <div className="Search">
        <input className="Search__input" placeholder="Search by name"></input>
        <button className="Search__button">Find Character</button>
    </div>
}

export default Search;