import './App.scss';
import { ReactComponent as Logo} from '../../assets/rickmorty.svg';
import Select from "../Select";
import Card from '../Card';
import Search from '../Search';
import PageButton from "../PageButton";

function App() {
  return (
    <div className="App">
        <div className="App__headerContainer">
        <h1 className="App__header"><span>surf the </span>
            <Logo className="App__logo" />
            <span> universe</span>
        </h1>
        <Search className="main" />

        <div className="App__selects">
            <Select/>
            <Select/>
        </div>

        </div>

        <div className="App__resultContainer">
            <div className="App__cardList">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

        <div className="App__pageNav">
            <PageButton active="inactive" arrow="left"></PageButton>

            <div className="App__pageNumbers">
                <PageButton active="active" number="1"></PageButton>
                <PageButton active="inactive" number="2"></PageButton>
                <PageButton active="inactive" number="3"></PageButton>
                <PageButton active="inactive" number="4"></PageButton>
                <PageButton active="inactive" number="5"></PageButton>
            </div>

            <PageButton active="inactive" arrow="right"></PageButton>

        </div>

    </div>
  );
}

export default App;
