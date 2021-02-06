import './DetailedCharacter.scss';
import Tag from '../../components/Tag';
import LabelValue from '../../components/LabelValue';
import { NavLink, useParams } from 'react-router-dom';
import { httpGet, getCharacter } from '../../util/request';
import React, { useState, useEffect, Fragment } from 'react';
import Header from "../../components/Header";
import CardList from "../../components/CardList";

const DetailedCharacter = () => {
    const { id } = useParams();

    const [characters, setCharacters] = useState([]);
    const [characterName, setCharacterName] = useState("");

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
    });

    const [episodes, setEpisodes] = useState(['Loading...']);
    const [episodeNames, setEpisodeNames] = useState(['Loading...']);

    const {
        name,
        status,
        species,
        type,
        gender,
        origin,
        location,
        image,
        episode,
        url,
        created,
    } = characterInfo || {};

    useEffect(() => {
        loadCharacter(id);
    }, []);

    useEffect(() => {
        loadEpisodes();
    }, []);

    const loadCharacter = async (charId) => {
        const item = await getCharacter(charId);
        setCharacterInfo(item);
    };

    const extractEpisodeName = (episodeObject) =>
        `${episodeObject.episode}: ${episodeObject.name}`;

    const loadEpisodes = async (episodes) => {
        const item = await getCharacter(id);

        let episodeObjects = [];
        for (const ep of item.episode) {
            const episodeData = await httpGet(ep);
            episodeObjects.push(episodeData);
        }

        setEpisodes(episodeObjects);
        setEpisodeNames(episodeObjects.map(extractEpisodeName));
    };

    /*useEffect(() => {
        loadCharacters(
            currentActive,
            genderFilter,
            statusFilter,
            characterName
        ).then((r) => r);
    }, [currentActive, statusFilter, genderFilter, characterName]);*/

    return characterInfo ? (
        <div>
            <Header setName={setCharacterName}></Header>
            <div className="DetailedCharacter">
                {characterName ? <CardList characters={characters ? characters : []} /> :
                    <Fragment>
                    <p className="DetailedCharacter__navText">
                        <NavLink
                            exact
                            to="/"
                            className="DetailedCharacter__link"
                            activeClassName="DetailedCharacter__activeLink"
                        >
                            Home
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
                                <Tag text={status}></Tag>
                                <Tag text={gender}></Tag>
                            </div>

                            <div className="DetailedCharacter__mainInfo">
                                <div className="DetailedCharacter__col">
                                    <LabelValue
                                        label="Species"
                                        values={[species]}
                                    />
                                    <LabelValue
                                        label="Origin"
                                        values={[origin.name]}
                                    />
                                    <LabelValue
                                        label="Birthday"
                                        values={[created]}
                                    />
                                    <LabelValue
                                        label="Last Known Location"
                                        values={[location.name]}
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
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>}
            </div>
        </div>
    ) : (
        <div className="DetailedCharacter"> Error 404: Not Found</div>
    );
};

export default DetailedCharacter;
