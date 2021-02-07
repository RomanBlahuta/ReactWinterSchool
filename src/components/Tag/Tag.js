import './Tag.scss';
import Dead from '../../assets/dead.svg';
import Alive from '../../assets/alive.svg';
import Male from '../../assets/male.svg';
import Female from '../../assets/female.svg';
import Unknown from '../../assets/unknown.svg';
import Genderless from '../../assets/genderless.svg';
import { PropTypes } from 'prop-types';

const Tag = ({ text }) => {
    const tagIcons = {
        Alive: Alive,
        Dead: Dead,
        unknown: Unknown,
        Male: Male,
        Female: Female,
        Genderless: Genderless,
    };

    return (
        <div className="Tag">
            <img src={tagIcons[text]} /> {text}
        </div>
    );
};

export default Tag;

Tag.propTypes = {
    text: PropTypes.string.isRequired,
};
