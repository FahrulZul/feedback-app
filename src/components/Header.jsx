import PropTypes from 'prop-types'

function Header({text}) {
  return (
    <div className="header">
        <div className="header_box container">
            <h1 className="header_logo">{text} <span>UI</span></h1>
        </div>
    </div>
  )
}

Header.defaultProps = {text: 'Feedback'}
Header.propTypes = {text: PropTypes.string}


export default Header