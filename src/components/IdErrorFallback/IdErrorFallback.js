import React from "react";
import './IdError.scss';
import Logo from "../../assets/rickmorty.svg";
import { Link } from "react-router-dom";
import RickIcon from "../../assets/RickIcon.png"
import MortyIcon from "../../assets/MortyIcon.png"

const IdErrorFallback = ({subject, id}) => {

    return (<div className="IdErrorFallback">
        <div className="IdErrorFallback__header">
            <Link exact to="/"><img src={Logo} className="IdErrorFallback__logo" /></Link>
        </div>
        <div className="IdErrorFallback__content">
            <img src={RickIcon} width="450px" height="450px" />
            <img src={MortyIcon} style={{marginTop: "60px"}} width="390px" height="390px" />
        </div>
        <div className="IdErrorFallback__info">
            <h1 className="IdErrorFallback__errorText"> {`${subject} #${id}: 404 Not Found`}</h1>
            <div className="break"></div>
            <Link exact to="/" className="IdErrorFallback__goHome">Go Back</Link>
        </div>
    </div>);
}
export default IdErrorFallback;