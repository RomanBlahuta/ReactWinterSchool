import './App.scss';
import { ReactComponent as Logo} from '../../assets/rickmorty.svg';
import Select from "../Select";
import Card from '../Card';

function App() {
  return (
    <div className="App">
        <h1 className="App__header"><span>surf the </span>
            <Logo className="App__logo" />
            <span> universe</span>
        </h1>
        <div className="App_searchField">
            <input className="App_input" placeholder="Search by name"></input>
            <button className="App__button">Find Character</button>
        </div>

        <Select/>
        <Select/>

        <div className="App__resultContainer">
            <div className="App__cardList">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    </div>
  );
}

export default App;
