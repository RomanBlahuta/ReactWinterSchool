import './PageButton.scss'
import Right from '../../assets/right.svg'
import Left from '../../assets/left.svg'

const PageButton = ({arrow, number, active}) => {

    if (arrow === 'left') {
        return <div className={`PageButton__${active}`}>
            <img src={Left}></img>
        </div>
    }
    else if (arrow === 'right') {
        return <div className={`PageButton__${active}`}>
            <img src={Right}></img>
        </div>
    }
    else {
        return <div className={`PageButton__${active}`}>
            <span>{ number }</span>
        </div>
    }

}

export default PageButton;