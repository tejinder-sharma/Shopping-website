import { createContext, useEffect, useState } from "react";




const addCartItem = (cartItems, productToAdd) => {

    // If cart contains the product to add

    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    // If contains increment the cart item of that product

    if(existingItem){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
    }

    // Return the cartItems

    return [...cartItems, {...productToAdd, quantity: 1}]

}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
})

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const [cartCount, setCartCount] = useState(0);



    

    const addItemToCart = (productToAdd) => {

        setCartItems(addCartItem(cartItems, productToAdd))

    }

    useEffect(() => 
    {
        const newCartCount = cartItems.reduce((total, current) => total + current.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}