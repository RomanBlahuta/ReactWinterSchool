import './LabelValue.scss';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const LabelValue = ({ label, values = [], linkIDs = [], isLinkFor = '' }) => {
    const renderValues = (value) => (
        <p key={`id-${label}-${value}`} className="LabelValue__value">
            {value}
        </p>
    );

    const renderLinks = (value) => (
        <Link
            key={`id-${label}-${value.id}`}
            className="LabelValue__link"
            exact
            to={`/${isLinkFor}/${value.id}`}
        >
            {value.value}
        </Link>
    );

    const formLinkArray = (values, linkIDs) => {
        let result = [];

        for (let i = 0; i < values.length; i++) {
            result.push({ value: values[i], id: linkIDs[i] });
        }

        return result;
    };

    return (
        <div className="LabelValue">
            <p className="LabelValue__label">{label}</p>
            {!isLinkFor || values[0] === 'Loading...'
                ? values.map(renderValues)
                : formLinkArray(values, linkIDs).map(renderLinks)}
        </div>
    );
};

export default LabelValue;

LabelValue.propTypes = {
    label: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
    linkIDs: PropTypes.array,
    isLinkFor: PropTypes.string,
};
