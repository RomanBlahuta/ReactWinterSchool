import './CardList.scss';
import Card from '../Card';
import { PropTypes } from 'prop-types';

// TODO: reorder imports

const CardList = ({ characters }) => {
    const renderCharacter = (character) => (
        <Card key={character.id} {...character} />
    );

    return characters.length > 0 ? (
        <div className="CardList">{characters.map(renderCharacter)}</div>
    ) : (
        <h1 className="CardList__oops">No matching characters on this page</h1>
    );
};

export default CardList;

CardList.propTypes = {
    characters: PropTypes.array.isRequired,
};
