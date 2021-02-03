import './PageButton.scss';

const PageButton = ({ children, active, action, disabled }) => {
    return (
        <div
            className={
                'PageButton ' +
                (disabled ? 'PageButton__disabled' : `PageButton__${active}`)
            }
            onClick={action}
        >
            {children}
        </div>
    );
};

export default PageButton;
