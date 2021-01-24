import "./Card.scss";
import Photo from "../../assets/image 3.svg";
import Tag from "../Tag";
import LabelValue from "../LabelValue";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const Card = ({ id, name, status, species, type, gender, origin, location, image, episode, url, created }) => {
    console.log(image);

    return (
        <div className="Card">
            <div className="Card__imageHolder">
                <Link to={`/character/${id}`}>
                    {" "}
                    <img src={image} width="100%" className="Card_image" />{" "}
                </Link>
            </div>
            <div className="Card__content">
                <Link to={`/character/${id}`}>
                    {" "}
                    <h1 className="Card__name">{name}</h1>{" "}
                </Link>

                <div className="Card__tags">
                    <Tag />
                    <Tag />
                </div>

                <LabelValue label="Last known location" value="Earth (Replacement Dimension)"></LabelValue>
                <LabelValue label="Last known location" value="Earth (Replacement Dimension)"></LabelValue>
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
    gender: PropTypes.oneOf(["Male", "Female", "unknown", "Genderless"]),
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
