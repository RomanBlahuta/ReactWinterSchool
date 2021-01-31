import "./DetailedUser.scss";
import detailed from "../../assets/detailed.svg";
import Header from "../../components/Header";
import Tag from "../../components/Tag";
import LabelValue from "../../components/LabelValue";
import { NavLink, useParams } from "react-router-dom";
import { httpGet } from "../../util/request";
import { getCharacter } from "../../util/request";

const DetailedUser = () => {
    const { id } = useParams();
    const characterInfo = getCharacter(id);
    //console.log(characterInfo);

    const { name, status, species, type, gender, origin, location, image, episode, url, created } = characterInfo || {};

    let characterEpisodeList = [];

    let episodeData = [];
    for (let ep of episode) {
        let epObj = JSON.parse(httpGet(ep));
        episodeData.push(epObj);

        characterEpisodeList.push(`${epObj.episode}: ${epObj.name}`);
    }

    return characterInfo ? (
        <div>
            <div className="DetailedUser">
                <p className="DetailedUser__navText">
                    <NavLink exact to="/" className="DetailedUser__link" activeClassName="DetailedUser__activeLink">
                        Home
                    </NavLink>
                    <span className="DetailedUser__itemName">
                        &nbsp;|&nbsp;
                        <NavLink
                            exact
                            to={`/character/${id}`}
                            className="DetailedUser__link"
                            activeClassName="DetailedUser__activeLink"
                        >
                            #{id} {name}
                        </NavLink>
                    </span>
                </p>

                <div className="break"></div>

                <div className="DetailedUser__container">
                    <div className="DetailedUser__image">
                        <img src={image} className="DetailedUser__itemImg" />
                    </div>

                    <div className="DetailedUser__description">
                        <h1 className="DetailedUser__headName">
                            #{id} {name}
                        </h1>

                        <div className="DetailedUser__tagList">
                            <Tag text={status}></Tag>
                            <Tag text={gender}></Tag>
                        </div>

                        <div className="DetailedUser__mainInfo">
                            <div className="DetailedUser__col">
                                <LabelValue label="Species" value={species}></LabelValue>
                                <LabelValue label="Origin" value={origin.name}></LabelValue>
                                <LabelValue label="Birthday" value={created}></LabelValue>
                                <LabelValue label="Last Known Location" value={location.name}></LabelValue>
                                <LabelValue
                                    label="First seen in"
                                    value={episodeData[0].episode + ": " + episodeData[0].name}
                                ></LabelValue>
                            </div>

                            <div className="DetailedUser__col">
                                <LabelValue label="Episodes" value={characterEpisodeList.join("\n")}></LabelValue>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="DetailedUser"> Error 404: Not Found</div>
    );
};

export default DetailedUser;
