import { ReactComponent as Cart } from "../../assests/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    
  return (
    <>
      <label className="btn btn-ghost btn-circle" onClick={toggleIsCartOpen}>
        <div className="indicator">
          <Cart />
          <span className="badge badge-sm indicator-item">{cartCount}</span>
        </div>
      </label>
    </>
  );
};

export default CartIcon
