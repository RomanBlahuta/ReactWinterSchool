import "./Select.scss";
import Down from "../../assets/down.svg";
import React, { useState } from "react";

const Select = ({label, value, options, valueHandler}) => {
    const [active, setActive] = useState(false);
    const setOption = (event) => valueHandler(event.target.textContent);
    const handleOptionClick = (event) => {
        setOption(event);
        setActive(false);
    }
    const renderOptions = (option) => <div key={`id-${option}`} className="Select__option" onClick={handleOptionClick}>{option}</div>

    const toggle = () => setActive(!active);

    return (
        <div>
            <div className="Select" onClick={toggle}>
                <div className="Select__selectedOption">
                    <span className="Select__label">{label}:&nbsp;</span>
                    <span className="Select__value">{value}</span>
                </div>
                <img src={Down} className="Select__down" />
            </div>

            <div className={`Select__dropdown Select__dropdown${active ? "_active" : "_inactive"}`}>{options.map(renderOptions)}</div>
        </div>
    );
};

export default Select;
