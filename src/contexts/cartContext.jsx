import React from 'react';
import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones globales ACA
    const [cartList, setCartList] = useState([])

    const AddToCart = (objProduct) => {
        let listedCart = [...cartList];
        console.log(objProduct)
        if (listedCart.some((item) => item.data.id === objProduct.data.id))
        {
            listedCart.find((item) => item.data.id === objProduct.data.id).quantity += objProduct.quantity;
            setCartList(listedCart)
        } else {
            setCartList([...cartList, objProduct]);
        }
    }

    const removeCart = () => setCartList([]);

const totalPrice = () => {
    let total = 0;

    cartList.forEach((newItem) => {
        total +=
        parseInt(newItem.data.price) * parseInt(newItem.quantity)
        });
        return parseInt(total);
    };

const deleteProd = (id) => {
    setCartList(cartList.filter((newItem) => newItem.data.id !== id))
}

const iconCart = () => cartList.reduce((acum, valor) => acum + valor.quantity, 0);

//spread de cart para que no pise los elementos
    return(
        <CartContext.Provider 
        value={{
            cartList,
            setCartList,
            AddToCart,
            deleteProd,
            totalPrice,
            removeCart,
            iconCart
            }}>
        {children}
        </CartContext.Provider>
    )
}