import "./Home.scss";
import { ReactComponent as Logo } from "../../assets/rickmorty.svg";
import Select from "../../components/Select";
import Card from "../../components/Card";
import Search from "../../components/Search";
//import PageButton from "../../components/PageButton";
import CardList from "../../components/CardList";
import React, { useState, useEffect } from "react";
import Left from "../../assets/left.svg";
import Right from "../../assets/right.svg";
import { getCharacters } from "../../util/request";

function Home() {
    const [first, setFirst] = useState(0);
    const [last, setLast] = useState(4);
    const [currentActive, setCurrentActive] = useState(1);
    const [pages, setPages] = useState([1, 2, 3, 4, 5]);
    const [actives, setActives] = useState({ 1: "active", 2: "inactive", 3: "inactive", 4: "inactive", 5: "inactive" });
    const [characters, setCharacters] = useState();

    const statuses = ["All statuses", "Alive", "Dead", "unknown"];
    const genders = ["All genders", "Male", "Female", "unknown", "Genderless"];

    const [statusFilter, setStatusFilter] = useState("All statuses");
    const [genderFilter, setGenderFilter] = useState("All genders");

    useEffect(() => {
        loadCharacters();
    }, []);

    const loadCharacters = async () => {
        const items = await getCharacters();
        setCharacters(items?.results);
        //console.log(characters);
    }

    const handleClickNext = () => {
        if (currentActive === 5) {
            actives[5] = "inactive";
            actives[1] = "active";
            setCurrentActive(1);
            let newPages = pages.map((page) => page + 5); //todo support not divisible by 5 last page number
            //todo check for last page and last API entry
            setPages(newPages);
        } else {
            actives[currentActive] = "inactive";
            actives[currentActive + 1] = "active";
            setCurrentActive(currentActive + 1);
        }

        setFirst(first + 4);
        setLast(last + 4);
    };

    const handleClickPrevious = () => {
        if (currentActive === 1) {
            if (pages[0] !== 1) {
                actives[1] = "inactive";
                actives[5] = "active";
                setCurrentActive(5);
                setPages(pages.map((page) => page - 5));

                setFirst(first - 4);
                setLast(last - 4);
            } else {
                alert("Reached 1st page.");
            }
        } else {
            actives[currentActive] = "inactive";
            actives[currentActive - 1] = "active";
            setCurrentActive(currentActive - 1);

            setFirst(first - 4);
            setLast(last - 4);
        }
    };

    const handleClickPageNumber = (event) => {
        setFirst(0 + 4 * (Number(event.target.textContent) - 1));
        setLast(4 * Number(event.target.textContent));

        actives[currentActive] = "inactive";
        const clicked = Number(event.target.textContent) % 5 === 0 ? 5 : Number(event.target.textContent) % 5;
        actives[clicked] = "active";

        setCurrentActive(clicked);
    };

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
                    <Select label="Status" value={statusFilter} options={statuses} valueHandler={setStatusFilter}/>
                    <Select  label="Gender" value={genderFilter} options={genders} valueHandler={setGenderFilter}/>
                </div>
            </div>

            <div className="App__resultContainer">
                <CardList characters={characters ? characters.slice(first, last) : []}></CardList>
            </div>

            <div className="App__pageNav">
                <div className={`PageButton__inactive`} onClick={handleClickPrevious}>
                    <img src={Left}></img>
                </div>

                <div className={`PageButton__${actives["1"]}`} onClick={handleClickPageNumber}>
                    <span>{pages[0]}</span>
                </div>
                <div className={`PageButton__${actives["2"]}`} onClick={handleClickPageNumber}>
                    <span>{pages[1]}</span>
                </div>
                <div className={`PageButton__${actives["3"]}`} onClick={handleClickPageNumber}>
                    <span>{pages[2]}</span>
                </div>
                <div className={`PageButton__${actives["4"]}`} onClick={handleClickPageNumber}>
                    <span>{pages[3]}</span>
                </div>
                <div className={`PageButton__${actives["5"]}`} onClick={handleClickPageNumber}>
                    <span>{pages[4]}</span>
                </div>

                <div className={`PageButton__inactive`} onClick={handleClickNext}>
                    <img src={Right}></img>
                </div>
            </div>

            {/*<div className={`App__firstPageErrorMessage${}`}>

            </div>*/}
        </div>
    );
}

export default Home;
