import './Home.scss';
import { ReactComponent as Logo } from '../../assets/rickmorty.svg';
import Select from '../../components/Select';
import Search from '../../components/Search';
//import PageButton from "../../components/PageButton";
import CardList from '../../components/CardList';
import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../util/request';
import Pagination from '../../components/Pagination';
import DynamicQuote from '../../components/DynamicQuote';

function Home() {
    const [first, setFirst] = useState(0);
    const [last, setLast] = useState(4);

    const [currentActive, setCurrentActive] = useState(1);
    const [pages, setPages] = useState([1, 2, 3, 4, 5]);
    const [actives, setActives] = useState({
        1: 'active',
        2: 'inactive',
        3: 'inactive',
        4: 'inactive',
        5: 'inactive',
    });
    const [characters, setCharacters] = useState([]);

    const [currentApiPage, setCurrentApiPage] = useState(1);
    const [perApiPage, setPerApiPage] = useState(0);
    const [apiTotal, setApiTotal] = useState(0);
    const [apiPageCount, setApiPageCount] = useState(0);

    const statuses = ['All statuses', 'Alive', 'Dead', 'unknown'];
    const genders = ['All genders', 'Male', 'Female', 'unknown', 'Genderless'];

    const [statusFilter, setStatusFilter] = useState('All statuses');
    const [genderFilter, setGenderFilter] = useState('All genders');

    useEffect(() => {
        loadCharacters(currentApiPage);
    }, []);

    const loadCharacters = async (page) => {
        const items = await getCharacters(page);
        setCharacters(items?.results);
        setPerApiPage(characters?.length);
        setApiTotal(items?.info.count);
        setApiPageCount(items?.info.pages);
    };

    const handleClickNext = () => {
        if (currentActive === 5) {
            actives[5] = 'inactive';
            actives[1] = 'active';
            setCurrentActive(1);
            let newPages = pages.map((page) => page + 5); //todo support not divisible by 5 last page number
            //todo check for last page and last API entry
            setPages(newPages);
        } else {
            actives[currentActive] = 'inactive';
            actives[currentActive + 1] = 'active';
            setCurrentActive(currentActive + 1);
        }

        setFirst(first + 4);
        setLast(last + 4);
        //console.log(perApiPage, apiTotal, apiPageCount);
    };

    const handleClickPrevious = () => {
        if (currentActive === 1) {
            if (pages[0] !== 1) {
                actives[1] = 'inactive';
                actives[5] = 'active';
                setCurrentActive(5);
                setPages(pages.map((page) => page - 5));

                setFirst(first - 4);
                setLast(last - 4);
            } else {
                alert('Reached 1st page.');
            }
        } else {
            actives[currentActive] = 'inactive';
            actives[currentActive - 1] = 'active';
            setCurrentActive(currentActive - 1);

            setFirst(first - 4);
            setLast(last - 4);
        }
    };

    const handleClickPageNumber = (event) => {
        setFirst(4 * (Number(event.target.textContent) - 1));
        setLast(4 * Number(event.target.textContent));

        actives[currentActive] = 'inactive';
        const clicked =
            Number(event.target.textContent) % 5 === 0 ? 5 : Number(event.target.textContent) % 5;
        actives[clicked] = 'active';

        setCurrentActive(clicked);
    };

    return (
        <div className="Home">
            <div className="Home__headerContainer">
                <h1 className="Home__header">
                    <span>surf the </span>
                    <Logo className="Home__logo" />
                    <span> universe</span>
                </h1>
                <DynamicQuote />

                <Search className="main" />

                <div className="Home__selects">
                    <Select
                        label="Status"
                        value={statusFilter}
                        options={statuses}
                        valueHandler={setStatusFilter}
                    />
                    <Select
                        label="Gender"
                        value={genderFilter}
                        options={genders}
                        valueHandler={setGenderFilter}
                    />
                </div>
            </div>

            <div className="Home__resultContainer">
                <CardList characters={characters ? characters.slice(first, last) : []}></CardList>
            </div>

            <Pagination
                handleClickPrevious={handleClickPrevious}
                handleClickPageNumber={handleClickPageNumber}
                handleClickNext={handleClickNext}
                actives={actives}
                pages={pages}
            />
        </div>
    );
}

export default Home;
