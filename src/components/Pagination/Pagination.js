import './Pagination.scss'
import Left from "../../assets/left.svg";
import Right from "../../assets/right.svg";

const Pagination = ({handleClickPrevious, handleClickPageNumber, handleClickNext, pages, actives}) => {

    const indexes = [0, 1, 2, 3, 4];

    const renderNumbers = (pageNum) => <div className={`PageButton__${actives[pageNum+1]}`} onClick={handleClickPageNumber}><span>{pages[pageNum]}</span></div>;

    return (
        <div className="Pagination">
            <div className={`PageButton__inactive`} onClick={handleClickPrevious}>
                <img src={Left}></img>
            </div>
            {indexes.map(renderNumbers)}
            <div className={`PageButton__inactive`} onClick={handleClickNext}>
                <img src={Right}></img>
            </div>
        </div>
    );
}

export default Pagination;