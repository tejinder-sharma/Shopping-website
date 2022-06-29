
const CartItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl, } = cartItem;
    console.log(imageUrl)
    return(
        <div className="flex p-2 items-center">
           <img className="w-20 h-20 object-cover" src={imageUrl} alt={`${name}`}/>
           <div className="flex flex-col ml-2">
             <span>{name}</span>
             <span>{`$${price}`} x {quantity}</span>
           </div>

        </div>
    )
}

export default CartItem