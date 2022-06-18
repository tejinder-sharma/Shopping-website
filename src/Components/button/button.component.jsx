
const BUTTON_TYPES ={
    google: 'btn-primary',
    outline: 'btn-outline'
}
const Button = ({children, buttonType, ...otherProps}) => {
    return(
        <button className={`btn ${BUTTON_TYPES[buttonType]}`} {...otherProps}>{children}</button>
    )
}

export default Button