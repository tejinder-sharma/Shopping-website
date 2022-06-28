
const BUTTON_TYPES ={
    google: 'btn-primary',
    outline: 'btn-outline',
    googleMtAuto: 'btn-primary w-full mt-auto'

}
const Button = ({children, buttonType, ...otherProps}) => {
    return(
        <button className={`btn ${BUTTON_TYPES[buttonType]}`} {...otherProps}>{children}</button>
    )
}

export default Button