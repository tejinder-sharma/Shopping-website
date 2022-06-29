import CartItem from "../cart-item/cart-item.component"

import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext)
    return(
        <>
          <div className="absolute w-72 h-80 flex flex-col p-5 border top-[50px] right-[20px]  bg-white">
         
            <div className="h-56 flex flex-col overflow-auto">
              {cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)}
            
            </div>
            <button className="btn btn-outline btn-primary mt-auto">Checkout</button>
          
          </div>
       
        
        </>
    )
}

export default CartDropdown