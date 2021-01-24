import "./DetailedUser.scss";
import detailed from "../../assets/detailed.svg";
import Header from "../../components/Header";
import Tag from "../../components/Tag";
import LabelValue from "../../components/LabelValue";
import { NavLink, useParams } from "react-router-dom";

const DetailedUser = ({ selectCharacter }) => {
    const { id } = useParams();
    const characterInfo = selectCharacter(Number(id));
    console.log(characterInfo);

    const { name, status, species, image } = characterInfo || {};

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
                            to="/character"
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
                            <Tag></Tag>
                            <Tag></Tag>
                        </div>

                        <div className="DetailedUser__mainInfo">
                            <div className="DetailedUser__col">
                                <LabelValue label="Species" value="Human"></LabelValue>
                                <LabelValue label="Origin" value="Earth"></LabelValue>
                                <LabelValue label="Birthday" value="10 Jun 2020"></LabelValue>
                                <LabelValue
                                    label="Last Known Location"
                                    value="Earth (Replacement Dimension)"
                                ></LabelValue>
                                <LabelValue
                                    label="First seen in"
                                    value="Edge of Tomorty: Rick, Die, Rickpeat"
                                ></LabelValue>
                            </div>

                            <div className="DetailedUser__col">
                                <LabelValue
                                    label="Episodes"
                                    value="S03E07: The Ricklantis Mixup <br /> S01E10: Close Rick-counters of the Rick Kind  <br /> S03E07: The Ricklantis Mixup <br /> S01E10: Close Rick-counters of the Rick Kind "
                                ></LabelValue>
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
