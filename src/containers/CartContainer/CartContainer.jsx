import React from 'react';
import { Button, Container, Table } from "react-bootstrap"
import { useCartContext } from "../../contexts/cartContext"
import CartTable from "../../components/CartTable/CartTable"

const CartContainer = () => {
    const { cartList, totalPrice, removeCart } = useCartContext()

  return (
    <Container>
    <Table className="mt-5" striped bordered hover variant="light">
    <thead>
      <tr>
        <th></th>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Precios</th>
        <th>Borrar</th>
      </tr>
    </thead>
    <tbody>
    {
        cartList.map((item) => ( <CartTable item={item} key={item.prod.id} />) )
    }
    </tbody>
    <tbody>
      <tr>
   <th>Total: $ {totalPrice()}</th>
      </tr>
    </tbody>
    </Table>
    <Button variant="danger" onClick={removeCart }>
                    Borrar Todo
   </Button>
    </Container>
  )
}

export default CartContainer