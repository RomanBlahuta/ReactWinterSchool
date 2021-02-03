import './CardList.scss';
import Card from '../Card';

const CardList = ({ characters }) => {
    const renderCharacter = (character) => (
        <Card key={character.id} {...character}></Card>
    );

    return characters.length > 0 ? (
        <div className="CardList">{characters.map(renderCharacter)}</div>
    ) : (
        <h1 className="CardList__oops">No matching characters on this page</h1>
    );
};

export default CardList;
