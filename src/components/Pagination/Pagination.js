import './Pagination.scss'
import Left from "../../assets/left.svg";
import Right from "../../assets/right.svg";

const Pagination = ({handleClickPrevious, handleClickPageNumber, handleClickNext, pages, actives}) => {
    return (
        <div className="Pagination">
            <div className={`PageButton__inactive`} onClick={handleClickPrevious}>
                <img src={Left}></img>
            </div>

            <div className={`PageButton__${actives["1"]}`} onClick={handleClickPageNumber}>
                <span>{pages[0]}</span>
            </div>
            <div className={`PageButton__${actives["2"]}`} onClick={handleClickPageNumber}>
                <span>{pages[1]}</span>
            </div>
            <div className={`PageButton__${actives["3"]}`} onClick={handleClickPageNumber}>
                <span>{pages[2]}</span>
            </div>
            <div className={`PageButton__${actives["4"]}`} onClick={handleClickPageNumber}>
                <span>{pages[3]}</span>
            </div>
            <div className={`PageButton__${actives["5"]}`} onClick={handleClickPageNumber}>
                <span>{pages[4]}</span>
            </div>

            <div className={`PageButton__inactive`} onClick={handleClickNext}>
                <img src={Right}></img>
            </div>
        </div>
    );
}

export default Pagination;