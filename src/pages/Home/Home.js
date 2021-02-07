import './Home.scss';
import { ReactComponent as Logo } from '../../assets/rickmorty.svg';
import Select from '../../components/Select';
import Search from '../../components/Search';
import CardList from '../../components/CardList';
import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../util/request';
import Pagination from '../../components/Pagination';
import DynamicQuote from '../../components/DynamicQuote';

function Home() {
    const [characters, setCharacters] = useState([]);

    const [currentActive, setCurrentActive] = useState(1);
    const [pages, setPages] = useState([]);

    const statuses = ['All statuses', 'Alive', 'Dead', 'unknown'];
    const genders = ['All genders', 'Male', 'Female', 'unknown', 'Genderless'];
    const [statusFilter, setStatusFilter] = useState('All statuses');
    const [genderFilter, setGenderFilter] = useState('All genders');
    const [characterName, setCharacterName] = useState('');
    const [apiPagesTotal, setApiPagesTotal] = useState(0);

    // Initial character load
    useEffect(() => {
        loadCharacters(
            currentActive,
            genderFilter,
            statusFilter,
            characterName
        ).then((r) => r);
    }, []);

    // Loads corresponding characters if filters or the current page have changed
    useEffect(() => {
        loadCharacters(
            currentActive,
            genderFilter,
            statusFilter,
            characterName
        ).then((r) => r);
    }, [currentActive, statusFilter, genderFilter, characterName]);

    // Sets the current page to be the first one if the character list was filtered
    useEffect(() => {
        setCurrentActive(1);
    }, [statusFilter, genderFilter, characterName]);

    const loadCharacters = async (page, gender, status, name) => {
        const items = await getCharacters(page, gender, status, name);
        setCharacters(items?.results);
        setApiPagesTotal(items?.info?.pages);
        setPages([...Array(items?.info?.pages).keys()].map((x) => x + 1));
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

                <Search className="main" setName={setCharacterName} />

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
                currentActive={currentActive}
                pages={pages}
                apiPagesTotal={apiPagesTotal}
                setCurrentActive={setCurrentActive}
            />
        </div>
    );
}

export default Home;
