import './Select.scss';
import Down from '../../assets/down.svg';

const Select = () => {
    return <div className="Select">
        <div className="Select_selectedOption">
            <span className="Select__label">Status: </span>
            <span className="Select__value">All statuses</span>
            <img src={Down} className="Select__down"/>
        </div>
    </div>
}

export default Select;