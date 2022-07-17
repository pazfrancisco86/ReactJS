import React from 'react'
import { useCartContext } from '../../contexts/cartContext'
import { Button } from 'react-bootstrap'

const CartTable = ({ item }) => {
    const { deleteProd } = useCartContext()

  return (
              <tr>
                  <td><img style={{width: "100px", height:"100px"}} alt="mascota" src={item.prod.img} /></td>
                  <td>{item.prod.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.prod.price}</td>
                  <td><Button variant="danger" onClick={()=>{deleteProd(item.prod.id)}}>
                       X
                  </Button></td>
              </tr>
  )
}

export default CartTable