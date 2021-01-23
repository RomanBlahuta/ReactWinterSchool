import './DetailedUser.scss';
import detailed from '../../assets/detailed.svg'

const DetailedUser = () => {
    return <div className="DetailedUser">

        <div className="DetailedUser__image">
            <img src={detailed}/>
        </div>

        <div className="DetailedUser__description">

        </div>

    </div>
}

export default DetailedUser;