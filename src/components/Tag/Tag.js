import { PropTypes } from 'prop-types';
import './Tag.scss';
import { TAG_ICONS } from '../../util/consts';

const Tag = ({ text }) => {
    return (
        <div className="Tag">
            <img src={TAG_ICONS[text]} /> {text}
        </div>
    );
};

export default Tag;

Tag.propTypes = {
    text: PropTypes.string.isRequired,
};
