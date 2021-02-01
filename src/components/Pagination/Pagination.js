import './Pagination.scss';
import Left from '../../assets/left.svg';
import Right from '../../assets/right.svg';
import PageButton from '../PageButton';

const Pagination = ({
    handleClickPrevious,
    handleClickPageNumber,
    handleClickNext,
    pages,
    actives,
}) => {
    const indexes = [0, 1, 2, 3, 4];

    const renderNumbers = (pageNum) => (
        <PageButton key={pageNum} active={actives[pageNum + 1]} action={handleClickPageNumber}>
            <span>{pages[pageNum]}</span>
        </PageButton>
    );

    return (
        <div className="Pagination">
            <PageButton active="inactive" action={handleClickPrevious}>
                <img src={Left}></img>
            </PageButton>
            {indexes.map(renderNumbers)}
            <PageButton active="inactive" action={handleClickNext}>
                <img src={Right}></img>
            </PageButton>
        </div>
    );
};

export default Pagination;
