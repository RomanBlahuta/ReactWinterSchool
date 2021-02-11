import React from 'react';
import './IdErrorFallback.scss';
import Logo from '../../assets/rickmorty.svg';
import { Link } from 'react-router-dom';
import RickIcon from '../../assets/RickIcon.png';
import MortyIcon from '../../assets/MortyIcon.png';
import { PropTypes } from 'prop-types';

// TODO: as an idea, you could think about more clear component name. But the view looks cool :)
const IdErrorFallback = ({ subject, id }) => {
    return (
        <div className="IdErrorFallback">
            <div className="IdErrorFallback__header">
                <Link exact to="/">
                    <img src={Logo} className="IdErrorFallback__logo" />
                </Link>
            </div>
            <div className="IdErrorFallback__content">
                <img src={RickIcon} width="450px" height="450px" />
                <img
                    src={MortyIcon}
                    style={{ marginTop: '60px' }}
                    width="390px"
                    height="390px"
                />
            </div>
            <div className="IdErrorFallback__info">
                <h1 className="IdErrorFallback__errorText">
                    {' '}
                    {`${subject} #${id}: 404 Not Found`}
                </h1>
                <div className="break" />
                <Link exact to="/" className="IdErrorFallback__goHome">
                    Go Back
                </Link>
            </div>
        </div>
    );
};
export default IdErrorFallback;

IdErrorFallback.propTypes = {
    subject: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
