import React from 'react';
import { useState } from "react"
import { useCartContext } from "../../contexts/cartContext";

const ItemCount = ( { stock, initial, data, setState} ) => {

    const [count, setCount] = useState(initial);
    const { AddToCart, cartList } = useCartContext()

    console.log(cartList);

    function add(){
            if (count < stock){
                setCount( count + 1 );
            }
        }
    function subtract(){
        if (count > initial)
        setCount(count - 1 );
    }
    function reset(){
        setCount(initial)
    }
    function onAdd(){
      AddToCart({
          ...data,
          quantity: count
    })
    setState("otro")
  }

  return (
    <div>
    <p>Contador: {count}</p>
    <button onClick={add}>Sumar</button>
    <button onClick={subtract}>Restar!</button>
    <button onClick={reset}>Reiniciar</button>
    <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount