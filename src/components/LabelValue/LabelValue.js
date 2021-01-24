import "./LabelValue.scss";

const LabelValue = ({ label, value }) => {
    return (
        <div className="LabelValue">
            <p className="LabelValue__label">{label}</p>
            <p className="LabelValue__value">{value}</p>
        </div>
    );
};

export default LabelValue;
