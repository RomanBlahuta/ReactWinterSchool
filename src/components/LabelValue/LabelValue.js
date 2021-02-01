import './LabelValue.scss';

const LabelValue = ({ label, values }) => {

    const renderValues = (value) => <p key={`id-${label}-${value}`} className="LabelValue__value">{value}</p>;

    return (
        <div className="LabelValue">
            <p className="LabelValue__label">{label}</p>
            {values.map(renderValues)}
        </div>
    );
};

export default LabelValue;
