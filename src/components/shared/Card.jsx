import PropTypes from 'prop-types';

function Card({children, reverse, customClass}) {
  return (
    <div className={`card ${customClass} ${reverse && 'feedback_reverse'}`}>
        {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
  customClass: ''
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
    customClass: PropTypes.string
}

export default Card