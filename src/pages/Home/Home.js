import "./Home.scss";
import { ReactComponent as Logo } from "../../assets/rickmorty.svg";
import Select from "../../components/Select";
import Card from "../../components/Card";
import Search from "../../components/Search";
import PageButton from "../../components/PageButton";
import CardList from "../../components/CardList";

function Home({ characters }) {
    return (
        <div className="App">
            <div className="App__headerContainer">
                <h1 className="App__header">
                    <span>surf the </span>
                    <Logo className="App__logo" />
                    <span> universe</span>
                </h1>
                <Search className="main" />

                <div className="App__selects">
                    <Select />
                    <Select />
                </div>
            </div>

            <div className="App__resultContainer">
                <CardList characters={characters}></CardList>
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

export default Home;
