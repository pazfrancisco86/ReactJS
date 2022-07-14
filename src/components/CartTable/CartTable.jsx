import React from 'react'
import { useCartContext } from '../../contexts/cartContext'
import { Button } from 'react-bootstrap'

const CartTable = ({ item }) => {
    const { deleteProd } = useCartContext()
    console.log(item);
  return (
    <div>{item.prod.title}
    <Button variant="danger" onClick={()=>{deleteProd(item.prod.id)}}>
                                X
                            </Button>
    </div>
  )
}

export default CartTable