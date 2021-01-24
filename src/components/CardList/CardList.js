import "./CardList.scss";
import Card from "../Card";

const CardList = ({ characters }) => {
    const renderCharacter = (character) => <Card key={character.id} {...character}></Card>;

    return <div className="CardList">{characters.map(renderCharacter)}</div>;
};

export default CardList;
