import './Card.scss'
import Photo from '../../assets/image 3.svg'
import Tag from '../Tag';
import LabelValue from "../LabelValue";

const Card = () => {
    return <div className="Card">
        <div className="Card__imageHolder">
            <img src={Photo} width="100%"/>
        </div>
        <div className="Card__content">
            <h1 className="Card__name">Lucy</h1>

            <div className="Card__tags">
                <Tag />
                <Tag />
            </div>

            <LabelValue label="Last known location" value="Earth (Replacement Dimension)"></LabelValue>
            <LabelValue label="Last known location" value="Earth (Replacement Dimension)"></LabelValue>

        </div>
    </div>
}

export default Card;