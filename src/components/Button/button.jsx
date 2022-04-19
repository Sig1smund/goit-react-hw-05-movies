import PropTypes from 'prop-types';
import s from './button.module.css'
export default function Button({type, onClick, children}){
    return (
        <button className={s.button}type={type} onClick={onClick}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    onClick: () => null,
    children: null,
};
  
Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
    onClick: PropTypes.func,
    children: PropTypes.node,
};