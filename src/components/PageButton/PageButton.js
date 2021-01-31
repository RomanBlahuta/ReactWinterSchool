import "./PageButton.scss";

const PageButton = ({ content, active, action }) => {
    return (
        <div className={`PageButton__${active}`} onClick={action}>
            {content}
        </div>
    );
};

export default PageButton;
