import './DetailedCharacter.scss';
import Header from '../../components/Header';
import Tag from '../../components/Tag';
import LabelValue from '../../components/LabelValue';
import { NavLink, useParams } from 'react-router-dom';
import { httpGet } from '../../util/request';
import { getCharacter } from '../../util/request';

const DetailedCharacter = () => {
    const { id } = useParams();
    const characterInfo = getCharacter(id);
    //console.log(characterInfo);

    const { name, status, species, type, gender, origin, location, image, episode, url, created } =
        characterInfo || {};

    //todo
    let characterEpisodeList = [];

    let episodeData = [];
    for (let ep of episode) {
        let epObj = JSON.parse(httpGet(ep));
        episodeData.push(epObj);

        characterEpisodeList.push(`${epObj.episode}: ${epObj.name}`);
    }

    return characterInfo ? (
        <div>
            <div className="DetailedCharacter">
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

                <div className="break"></div>

                <div className="DetailedCharacter__container">
                    <div className="DetailedCharacter__image">
                        <img src={image} className="DetailedCharacter__itemImg" />
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
                                <LabelValue label="Species" value={species}></LabelValue>
                                <LabelValue label="Origin" value={origin.name}></LabelValue>
                                <LabelValue label="Birthday" value={created}></LabelValue>
                                <LabelValue
                                    label="Last Known Location"
                                    value={location.name}
                                ></LabelValue>
                                <LabelValue
                                    label="First seen in"
                                    value={episodeData[0].episode + ': ' + episodeData[0].name}
                                ></LabelValue>
                            </div>

                            <div className="DetailedCharacter__col">
                                <LabelValue
                                    label="Episodes"
                                    value={characterEpisodeList.join('\n')}
                                ></LabelValue>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="DetailedCharacter"> Error 404: Not Found</div>
    );
};

export default DetailedCharacter;
