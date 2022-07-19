import React from 'react';
import { Button, Container, Table } from "react-bootstrap"
import { useCartContext } from "../../contexts/cartContext"
import CartTable from "../CartTable/CartTable"
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore';

const Cart = () => {
    const { cartList, totalPrice, removeCart } = useCartContext()
    async function generateOrder(e) {
      e.preventDefault()
      let order = {}

      order.buyer = {name: "asd", lastname: "asdasd", phone: "234234234"}
      order.total = totalPrice()

      order.items = cartList.map(cartItem => {
        const id = cartItem.data.id
        const title = cartItem.data.title
        const price = cartItem.data.price * cartItem.quantity

        return {id, title, price}
      })
      const db = getFirestore()
      const orderCollection = collection(db, 'orders')
      addDoc(orderCollection, order)
      .then(resp =>{ console.log(`Su numero de orden es: ${resp.id}`)
      })

      //actualizar stock
      const queryCollectionStock = collection(db,'productos')

      const queryUpdateStock = await query(
        queryCollectionStock,
        where ( documentId(), 'in', cartList.map(it => it.data.id))
      )

      const batch = writeBatch(db)

      await getDocs(queryUpdateStock)
      .then(resp=> resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - cartList.find(item => item.data.id === res.id).quantity
      })))
      .finally(()=> removeCart())

      batch.commit()
    }


  return (
    <>
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
        cartList.map((item) => ( <CartTable item={item} key={item.data.id} />) )
    }
    </tbody>
    <tbody>
      <tr>
   <th>Total: $ {totalPrice()}</th>
      </tr>
    </tbody>
    </Table>
    <div className='form-row'>
    <div className="form-group col-md-6">
    <Button variant="danger" onClick={removeCart }>
                    Borrar Todo
   </Button>
    </div>
   <br></br>
   <div className="form-group col-md-6">
   <Button variant="danger" onClick={generateOrder}>
                    Terminar compra
   </Button>
   </div>
    </div>
    <br></br>
    </Container>
    </>
  )
}

export default Cart