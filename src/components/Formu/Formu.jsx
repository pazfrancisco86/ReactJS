import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useCartContext } from "../../contexts/cartContext";

const Formu = () => {
    const { cartList, totalPrice, removeCart } = useCartContext()
    function generateOrder2(e){
        e.preventDefault()
        let order = {}

        order.buyer = {name: buyerName, lastname: buyerLastname}
        order.total = totalPrice()

        order.items = cartList.map(cartItem =>{
            const id = cartItem.data.id
            const title = cartItem.data.title
            const price = cartItem.data.price * cartItem.quantity
        })
        return {id, title, price}
    }
    console.log(order)



  return (
    <Form >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="text">
          <Form.Label >Nombre</Form.Label>
          <Form.Control type="text" name={buyerName} placeholder="Ingresa tu nombre" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastname">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="Lastname" name={buyerLastname} placeholder="Ingresa tu apellido" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Calle</Form.Label>
        <Form.Control name="street" placeholder="Calle Falsa 1234..." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridNumber">
        <Form.Label>Numero</Form.Label>
        <Form.Control type="Number" name="number" placeholder="Numero" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control name="city" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Provincia</Form.Label>
          <Form.Select defaultValue="Selecciona provincia..." >
            <option>Chubut</option>
            <option>Neuquen</option>
            <option>Santa Cruz</option>
            <option>Tierra del fuego</option>
            <option>Mendoza</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="exampleForm.ControlInput1">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" name="email" placeholder="nombre@ejemplo.com"/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Deseo recibir promociones" />
      </Form.Group>

      <Button onClick={generateOrder2} variant="primary" type="submit">
        Enviar pedido
      </Button>
    </Form>
  );
}

/* export default Formu; */