import { useState, useEffect } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [cont, setCont] = useState(initial);
    const [stack, setStock] = useState(stock);

    function sumar(){
            setCont(cont+initial);
            setStock(stack-initial);
            onAdd = console.log(cont);
            if(stack == 0){
            setCont(cont);
            setStock(stack);
            }
        }
    function restar(){
        setCont(cont-initial);
        setStock(stack+initial);
        onAdd = console.log(cont);
        if(stack == stock){
            setCont(cont);
            setStock(stack);
        }
    }

  return (
    <div>
        <p>Contador: {cont}</p>
        <button onClick={sumar}>Sumar</button>

        <button onClick={restar}>Restar!</button>
        <button onClick={()=> console.log(cont, stack)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount