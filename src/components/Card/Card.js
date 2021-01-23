import './Card.scss'
import Photo from '../../assets/image 3.svg'
import Tag from '../Tag';

const Card = () => {
    return <div className="Card">
        <div className="Card__imageHolder">
            <img src={Photo}/>
        </div>
        <div className="Card__content">
            <h1 className="Card__name">Lucy</h1>

            <div className="Card__tags">
                <Tag />
            </div>
        </div>
    </div>
}

export default Card;