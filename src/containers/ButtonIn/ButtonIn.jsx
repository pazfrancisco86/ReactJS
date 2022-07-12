import React from 'react';
import { Link } from "react-router-dom"

const ButtonIn = () => {
  return (
    <>
    <Link to="/cart">
        <button
        className='btn btn-outline-primary'
        onClick={()=>console.log("ir a cart")}
        >Ir al carrito o Terminar compra</button>
    </Link>
    <Link to="/">
        <button
        className='btn btn-outline-primary'
        onClick={()=>console.log("ir al home")}
        >Seguir comprando</button>
    </Link>
    </>
  )
}

export default ButtonIn