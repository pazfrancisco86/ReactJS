import React from 'react';
import { useState } from "react"
import { Button } from 'react-bootstrap';
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
    <Button variant="danger" onClick={subtract}>-</Button>
    <Button variant="success" onClick={add}>+</Button>
    <Button variant="warning" onClick={reset}>Reiniciar</Button>
    <Button variant="info" onClick={onAdd}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount