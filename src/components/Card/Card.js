import './Card.scss';
import Tag from '../Tag';
import LabelValue from '../LabelValue';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { httpGet } from '../../util/request';
import { useState, useEffect } from 'react';
import { MAX_CARD_NAME_LEN } from '../../util/consts';

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
    const [firstSeen, setFirstSeen] = useState('Loading...');

    useEffect(() => {
        loadFirstSeen().then((r) => r);
    }, []);

    const loadFirstSeen = async () => {
        let epObj = await httpGet(episode[0]);
        setFirstSeen(`${epObj.episode}: ${epObj.name}`);
    };

    return (
        <div className="Card">
            <div className="Card__imageHolder">
                <Link to={`/character/${id}`}>
                    <img src={image} width="100%" className="Card__image" />
                </Link>
            </div>
            <div className="Card__content">
                <Link className="Card__link" to={`/character/${id}`}>
                    {' '}
                    <h1 className="Card__name">
                        {name.length > MAX_CARD_NAME_LEN
                            ? name.slice(0, MAX_CARD_NAME_LEN) + '...'
                            : name}
                    </h1>{' '}
                </Link>

                <div className="Card__tags">
                    <Tag text={status} />
                    <Tag text={gender} />
                </div>

                <LabelValue
                    label="Last known location"
                    values={[location.name]}
                />
                <LabelValue label="First appeared in" values={[firstSeen]} />
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
