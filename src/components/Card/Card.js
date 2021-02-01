import './Card.scss';
import Photo from '../../assets/image 3.svg';
import Tag from '../Tag';
import LabelValue from '../LabelValue';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { httpGet } from '../../util/request';

const Card = ({
    id,
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
}) => {
    //console.log(image);

    let episodeData = [];
    for (let ep of episode) {
        let epObj = JSON.parse(httpGet(ep));
        //console.log(epObj);
        episodeData.push(epObj);
    }

    return (
        <div className="Card">
            <div className="Card__imageHolder">
                <Link to={`/character/${id}`}>
                    <img src={image} width="100%" className="Card__image" />
                </Link>
            </div>
            <div className="Card__content">
                <Link to={`/character/${id}`}>
                    {' '}
                    <h1 className="Card__name">{name}</h1>{' '}
                </Link>

                <div className="Card__tags">
                    <Tag text={status} />
                    <Tag text={gender} />
                </div>

                <LabelValue label="Last known location" value={location.name}></LabelValue>
                <LabelValue
                    label="First appeared in"
                    value={episodeData[0].episode + ': ' + episodeData[0].name}
                ></LabelValue>
            </div>
        </div>
    );
};

export default Card;

Card.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(['Male', 'Female', 'unknown', 'Genderless']),
    origin: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
    location: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
    episode: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
};
