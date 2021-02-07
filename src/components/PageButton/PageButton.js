import './PageButton.scss';
import { PropTypes } from 'prop-types';

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

PageButton.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};
