import './DetailedEpisode.scss';
import Header from '../../components/Header';
import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import CardList from '../../components/CardList';
import Pagination from '../../components/Pagination';
import { NavLink, useParams } from 'react-router-dom';
import LabelValue from '../../components/LabelValue';
import IdErrorFallback from '../../components/IdErrorFallback';
import {getCharacters, getEpisode, httpGet} from '../../util/request';

const DetailedEpisode = () => {
    const { id } = useParams();

    const [characterResults, setCharacterResults] = useState([]);
    const [characterName, setCharacterName] = useState('');

    const [currentActive, setCurrentActive] = useState(1);
    const [pages, setPages] = useState([]);
    const [apiPagesTotal, setApiPagesTotal] = useState(0);

    const [episodeInfo, setEpisodeInfo] = useState({
        name: 'Loading...',
        air_date: 'Loading...',
        episode: 'Loading...',
        characters: ['Loading...'],
        url: 'Loading...',
        created: 'Loading...',
    });

    const [episodeCharacters, setEpisodeCharacters] = useState([]);
    const [episodeCharacterNames, setEpisodeCharacterNames] = useState([]);

    const { name, air_date, episode, characters, created, url, error } =
        episodeInfo || {};

    const loadCharacters = async (page, gender, status, name) => {
        const items = await getCharacters(page, gender, status, name);
        setCharacterResults(items?.results);
        setApiPagesTotal(items?.info?.pages);
        setPages([...Array(items?.info?.pages).keys()].map((x) => x + 1));
    };

    const extractCharacterName = (char) =>  char.name;

    const loadEpisodeCharacters = async () => {
        const item = await getEpisode(id);

        let charObjects = [];
        for (let charUrl of item.characters ? item.characters : []) {
            const charData = await httpGet(charUrl);
            charObjects.push(charData);
        }

        setEpisodeCharacters(charObjects);
        setEpisodeCharacterNames(charObjects.map(extractCharacterName));
    }

    const objectsToIds = (charObj) => charObj.id;

    const loadEpisode = async (epId) => {
        const item = await getEpisode(epId);
        setEpisodeInfo(item);
    };

    useEffect(() => {
        loadEpisodeCharacters().then(r => r);
    }, [])

    useEffect(() => {
        loadEpisode(id).then((r) => r);
    }, []);

    useEffect(() => {
        loadCharacters(
            currentActive,
            'All genders',
            'All statuses',
            characterName
        ).then((r) => r);
    }, [currentActive, characterName]);

    useEffect(() => {
        setCurrentActive(1);
    }, [characterName]);

    return !error ? (
        <div>
            <Header setName={setCharacterName} />
            <div className="DetailedEpisode">
                {characterName ? (
                    <Fragment>
                        <CardList
                            characters={
                                characterResults ? characterResults : []
                            }
                        />
                        <div className="DetailedEpisode__paginationContainer">
                            <Pagination
                                apiPagesTotal={apiPagesTotal}
                                currentActive={currentActive}
                                pages={pages}
                                setCurrentActive={setCurrentActive}
                            />
                        </div>
                    </Fragment>
                ) : (
                    <Fragment>
                        <div className="DetailedEpisode__navTextContainer">
                            <p className="DetailedEpisode__navText">
                                <NavLink
                                    exact
                                    to="/"
                                    className="DetailedEpisode__link"
                                    activeClassName="DetailedEpisode__activeLink"
                                >
                                    <span className="DetailedEpisode__home">
                                        Home
                                    </span>
                                </NavLink>
                                <span className="DetailedEpisode__itemName">
                                    &nbsp;|&nbsp;
                                    <NavLink
                                        exact
                                        to={`/episode/${id}`}
                                        className="DetailedEpisode__link"
                                        activeClassName="DetailedEpisode__activeLink"
                                    >
                                        Episode: {episode}
                                    </NavLink>
                                </span>
                            </p>
                        </div>

                        <div className="break" />

                        <div className="DetailedEpisode__container">
                            <div className="DetailedEpisode__image">
                                <div className="DetailedEpisode__episodeBg">
                                    #{episode}
                                </div>
                            </div>

                            <div className="DetailedEpisode__description">
                                <h1 className="DetailedEpisode__headName">
                                    {name}
                                </h1>

                                <div className="DetailedEpisode__mainInfo">
                                    <div className="DetailedEpisode__col">
                                        <LabelValue label="Air Date" values={[air_date]} />
                                    </div>

                                    <div className="DetailedEpisode__col">
                                        <LabelValue
                                            label="Characters"
                                            values={episodeCharacterNames}
                                            isLinkFor="character"
                                            linkIDs={episodeCharacters.map(objectsToIds)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    ) : (
        <IdErrorFallback subject="Episode" id={id} />
    );
};

export default DetailedEpisode;
