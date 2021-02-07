import './DetailedCharacter.scss';
import Tag from '../../components/Tag';
import LabelValue from '../../components/LabelValue';
import { NavLink, useParams } from 'react-router-dom';
import { httpGet, getCharacter, getCharacters } from '../../util/request';
import React, { useState, useEffect, Fragment } from 'react';
import Header from '../../components/Header';
import CardList from '../../components/CardList';
import Pagination from '../../components/Pagination';
import IdErrorFallback from '../../components/IdErrorFallback';

const DetailedCharacter = () => {
    const { id } = useParams();

    const [characters, setCharacters] = useState([]);
    const [characterName, setCharacterName] = useState('');

    const [currentActive, setCurrentActive] = useState(1);
    const [pages, setPages] = useState([]);
    const [apiPagesTotal, setApiPagesTotal] = useState(0);

    const [characterInfo, setCharacterInfo] = useState({
        name: 'Loading...',
        status: 'Loading...',
        species: 'Loading...',
        type: 'Loading...',
        gender: 'Loading...',
        origin: 'Loading...',
        location: { name: 'Loading...', url: 'Loading...' },
        image: '',
        episode: [],
        url: 'Loading...',
        created: 'Loading...',
        error: undefined,
    });

    const [episodes, setEpisodes] = useState(['Loading...']);
    const [episodeNames, setEpisodeNames] = useState(['Loading...']);

    const {
        name,
        status,
        species,
        gender,
        origin,
        location,
        image,
        created,
        error,
    } = characterInfo || {};

    useEffect(() => {
        loadCharacter(id).then((r) => r);
    }, []);

    const loadCharacter = async (charId) => {
        const item = await getCharacter(charId);
        setCharacterInfo(item);
    };

    useEffect(() => {
        loadEpisodes().then((r) => r);
    }, []);

    const extractEpisodeName = (episodeObject) =>
        `${episodeObject.episode}: ${episodeObject.name}`;

    const loadEpisodes = async () => {
        const item = await getCharacter(id);

        let episodeObjects = [];
        for (const ep of item.episode ? item.episode : []) {
            const episodeData = await httpGet(ep);
            episodeObjects.push(episodeData);
        }

        setEpisodes(episodeObjects);
        setEpisodeNames(episodeObjects.map(extractEpisodeName));
    };

    const loadCharacters = async (page, gender, status, name) => {
        const items = await getCharacters(page, gender, status, name);
        setCharacters(items?.results);
        setApiPagesTotal(items?.info?.pages);
        setPages([...Array(items?.info?.pages).keys()].map((x) => x + 1));
    };

    const objectsToIds = (epObj) => epObj.id;

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
            <div className="DetailedCharacter">
                {characterName ? (
                    <Fragment>
                        <CardList characters={characters ? characters : []} />
                        <div className="DetailedCharacter__paginationContainer">
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
                            <p className="DetailedCharacter__navText">
                                <NavLink
                                    exact
                                    to="/"
                                    className="DetailedCharacter__link"
                                    activeClassName="DetailedCharacter__activeLink"
                                >
                                    <span className="DetailedCharacter__home">
                                        Home
                                    </span>
                                </NavLink>
                                <span className="DetailedCharacter__itemName">
                                    &nbsp;|&nbsp;
                                    <NavLink
                                        exact
                                        to={`/character/${id}`}
                                        className="DetailedCharacter__link"
                                        activeClassName="DetailedCharacter__activeLink"
                                    >
                                        #{id} {name}
                                    </NavLink>
                                </span>
                            </p>
                        </div>

                        <div className="break" />

                        <div className="DetailedCharacter__container">
                            <div className="DetailedCharacter__image">
                                <img
                                    src={image}
                                    alt="Loading..."
                                    className="DetailedCharacter__itemImg"
                                />
                            </div>

                            <div className="DetailedCharacter__description">
                                <h1 className="DetailedCharacter__headName">
                                    #{id} {name}
                                </h1>

                                <div className="DetailedCharacter__tagList">
                                    <Tag text={status} />
                                    <Tag text={gender} />
                                </div>

                                <div className="DetailedCharacter__mainInfo">
                                    <div className="DetailedCharacter__col">
                                        <LabelValue
                                            label="Species"
                                            values={[species]}
                                        />
                                        <LabelValue
                                            label="Origin"
                                            values={[origin?.name]}
                                        />
                                        <LabelValue
                                            label="Birthday"
                                            values={[created]}
                                        />
                                        <LabelValue
                                            label="Last Known Location"
                                            values={[location?.name]}
                                        />
                                        <LabelValue
                                            label="First seen in"
                                            values={[episodeNames[0]]}
                                        />
                                    </div>

                                    <div className="DetailedCharacter__col">
                                        <LabelValue
                                            label="Episodes"
                                            values={episodeNames}
                                            linkIDs={episodes.map(objectsToIds)}
                                            isLinkFor="episode"
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
        <IdErrorFallback subject="Character" id={id} />
    );
};

export default DetailedCharacter;
