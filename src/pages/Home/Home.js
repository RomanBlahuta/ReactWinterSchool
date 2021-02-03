import './Home.scss';
import { ReactComponent as Logo } from '../../assets/rickmorty.svg';
import Select from '../../components/Select';
import Search from '../../components/Search';
import CardList from '../../components/CardList';
import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../util/request';
import Pagination from '../../components/Pagination';
import DynamicQuote from '../../components/DynamicQuote';
import { PAGE_DISPLAY_NUMBER } from "../../util/consts";

function Home() {
    const [characters, setCharacters] = useState([]);
    const [charactersUnfiltered, setCharactersUnfiltered] = useState([]);

    const [currentActive, setCurrentActive] = useState(1);
    const [pages, setPages] = useState([]);

    const statuses = ['All statuses', 'Alive', 'Dead', 'unknown'];
    const genders = ['All genders', 'Male', 'Female', 'unknown', 'Genderless'];
    const [statusFilter, setStatusFilter] = useState('All statuses');
    const [genderFilter, setGenderFilter] = useState('All genders');
    const [apiPagesTotal, setApiPagesTotal] = useState(0);

    const canGoBack = currentActive !== 1;
    const canGoForward = currentActive !== apiPagesTotal;

    const [currentSlice, setCurrentSlice] = useState(1);
    const pageSliceFirst = PAGE_DISPLAY_NUMBER * (currentSlice - 1);
    const pageSliceLast = PAGE_DISPLAY_NUMBER * currentSlice;
    const pagesSlice = pages.slice(pageSliceFirst, pageSliceLast);

    // Initial character load
    useEffect(() => {
        loadCharacters(currentActive).then((r) => r);
    }, []);

    useEffect(() => {
        loadCharacters(currentActive).then((r) => r);
    }, [currentActive]);

    // If filter specified -> filter characters
    useEffect(() => {
        filterCharacters(charactersUnfiltered);
    }, [statusFilter, genderFilter, charactersUnfiltered]);

    const loadCharacters = async (page) => {
        const items = await getCharacters(page);
        setCharacters(items?.results);
        setCharactersUnfiltered(items?.results);
        setApiPagesTotal(items?.info.pages);
        setPages([...Array(items?.info.pages).keys()].map((x) => x + 1));
    };

    const filterCharacters = (characters) => {
        let result = [...characters];
        if (statusFilter !== 'All statuses') {
            result = result.filter(
                (character) => character.status === statusFilter
            );
        }
        if (genderFilter !== 'All genders') {
            result = result.filter(
                (character) => character.gender === genderFilter
            );
        }
        setCharacters(result);
    };

    const handleClickNext = () => {
        if (currentActive % 5 === 0) {
            setCurrentSlice(currentSlice + 1);
        }

        setCurrentActive(currentActive + 1);
    };

    const handleClickPrevious = () => {
        if (currentActive % 5 === 1) {
            setCurrentSlice(currentSlice - 1);
        }
        setCurrentActive(currentActive - 1);
    };

    const handleClickPageNumber = (event) => {
        const updatedPage = Number(event.target.textContent);
        setCurrentActive(updatedPage);
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
                <CardList characters={characters ? characters : []} />
            </div>

            <Pagination
                handleClickPrevious={handleClickPrevious}
                handleClickPageNumber={handleClickPageNumber}
                handleClickNext={handleClickNext}
                active={currentActive}
                pages={pagesSlice}
                goBack={canGoBack}
                goForward={canGoForward}
            />
        </div>
    );
}

export default Home;
