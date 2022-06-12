import { useState, useEffect } from "react"
import { Button, ButtonGroup } from "react-bootstrap";

const ItemCount = ( { stock, initial, onAdd} ) => {

    const [cont, setCont] = useState(initial);
    const [cantd, setCantd] = useState(stock);


    function sumar(){
            if (cont < cantd){
                setCont( cont + 1 );
            }
        }
    function restar(){
        if (cont > initial)
        setCont(cont - 1 )
    }

  return (
    <div>
    <p>Contador: {cont}</p>
    <button onClick={sumar}>Sumar</button>
     <button onClick={restar}>Restar!</button>
    <button onClick={()=>onAdd(cont)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount