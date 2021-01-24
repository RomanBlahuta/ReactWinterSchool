import './DetailedUser.scss';
import detailed from '../../assets/detailed.svg'
import Header from "../Header";
import Tag from "../Tag";
import LabelValue from "../LabelValue";

const DetailedUser = () => {
    return <div>
        <Header></Header>
        <div className="DetailedUser">
            <p className="DetailedUser__navText">Home <span className="DetailedUser__itemName">| #2 Public Opinion Judge</span></p>
            <div className="break"></div>
            <div className="DetailedUser__container">

                <div className="DetailedUser__image">
                    <img src={detailed} className="DetailedUser__itemImg"/>
                </div>

                <div className="DetailedUser__description">
                    <h1 className="DetailedUser__headName">#2 Public Opinion Judge</h1>

                    <div className="DetailedUser__tagList">
                        <Tag></Tag>
                        <Tag></Tag>
                    </div>

                    <div className="DetailedUser__mainInfo">
                        <div className="DetailedUser__col">
                            <LabelValue label="Species" value="Human"></LabelValue>
                            <LabelValue label="Origin" value="Earth"></LabelValue>
                            <LabelValue label="Birthday" value="10 Jun 2020"></LabelValue>
                            <LabelValue label="Last Known Location" value="Earth (Replacement Dimension)"></LabelValue>
                            <LabelValue label="First seen in" value="Edge of Tomorty: Rick, Die, Rickpeat"></LabelValue>
                        </div>

                        <div className="DetailedUser__col">
                            <LabelValue label="Episodes" value="S03E07: The Ricklantis Mixup <br /> S01E10: Close Rick-counters of the Rick Kind  <br /> S03E07: The Ricklantis Mixup <br /> S01E10: Close Rick-counters of the Rick Kind "></LabelValue>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}

export default DetailedUser;