import './Pagination.scss';
import Left from '../../assets/left.svg';
import Right from '../../assets/right.svg';
import PageButton from '../PageButton';

const Pagination = ({
    handleClickPrevious,
    handleClickPageNumber,
    handleClickNext,
    pages,
    active,
    goBack,
    goForward,
}) => {
    const indexes = [...Array(5).keys()];

    const renderNumbers = (pageNum) =>
        pages[pageNum] ? (
            <PageButton
                key={pageNum}
                active={pages[pageNum] === active ? 'active' : 'inactive'}
                disabled={false}
                action={handleClickPageNumber}
            >
                <span>{pages[pageNum]}</span>
            </PageButton>
        ) : (
            ''
        );

    return (
        <div className="Pagination">
            <PageButton
                active="inactive"
                disabled={!goBack}
                action={goBack ? handleClickPrevious : () => {}}
            >
                <img src={Left}></img>
            </PageButton>
            {indexes.map(renderNumbers)}
            <PageButton
                active="inactive"
                disabled={!goForward}
                action={goForward ? handleClickNext : () => {}}
            >
                <img src={Right}></img>
            </PageButton>
        </div>
    );
};

export default Pagination;
