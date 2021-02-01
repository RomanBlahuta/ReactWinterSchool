import './PageButton.scss';

const PageButton = ({ children, active, action }) => {
    return (
        <div className={`PageButton PageButton__${active}`} onClick={action}>
            {children}
        </div>
    );
};

export default PageButton;
