function Button({children, type, isDisabled}) {
  return (
    <button className={`btn`} type={type} disabled={isDisabled}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'button',
    isDisabled: false,
}

export default Button