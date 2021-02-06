import './Pagination.scss';
import Left from '../../assets/left.svg';
import Right from '../../assets/right.svg';
import PageButton from '../PageButton';
import { PAGE_DISPLAY_NUMBER } from '../../util/consts';
import { useState } from 'react';

const Pagination = ({
    pages,
    currentActive,
    apiPagesTotal,
    setCurrentActive,
}) => {
    const indexes = [...Array(5).keys()];

    const goBack = currentActive !== 1;
    const goForward = currentActive !== apiPagesTotal;

    const [currentSlice, setCurrentSlice] = useState(1);
    const pageSliceFirst = PAGE_DISPLAY_NUMBER * (currentSlice - 1);
    const pageSliceLast = PAGE_DISPLAY_NUMBER * currentSlice;
    const pagesSlice = pages.slice(pageSliceFirst, pageSliceLast);

    const handleClickNext = () => {
        if (currentActive % 5 === 0) {
            setCurrentSlice(currentSlice + 1);
        }

        setCurrentActive(currentActive + 1);
    };

    const handleClickPrevious = () => {
        if (currentActive % 5 === 1) {
            setCurrentSlice(currentSlice - 1);
        }
        setCurrentActive(currentActive - 1);
    };

    const handleClickPageNumber = (event) => {
        const updatedPage = Number(event.target.textContent);
        setCurrentActive(updatedPage);
    };

    const renderNumbers = (pageNum) =>
        pagesSlice[pageNum] ? (
            <PageButton
                key={pageNum}
                active={
                    pagesSlice[pageNum] === currentActive
                        ? 'active'
                        : 'inactive'
                }
                disabled={false}
                action={handleClickPageNumber}
            >
                <span>{pagesSlice[pageNum]}</span>
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
