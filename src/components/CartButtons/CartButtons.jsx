import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../contexts/cartContext"

function CartButtons({ setAtCheckout, totalPrice }) {
    const { cartList, removeCart } = useCartContext()

  return cartList.length === 0 ? (
    <div>
      <h1>El carrito se encuentra vacío</h1>
      <Link to={"/"}>
        <Button>Ir a la Tienda</Button>
      </Link>
    </div>
  ) : (
    <>
      <div>
        <h2>
          <strong>Precio Total: ${totalPrice}</strong>
        </h2>
      </div>
      <div>
        <Button
          className="m-1"
          variant="danger"
          onClick={() => {
            removeCart();
          }}
        >
          Vaciar Carrito
        </Button>
        <Button
          className="m-1"
          variant="success"
          onClick={(e) => {
            setAtCheckout(true);
          }}
        >
          Comprar Items
        </Button>
      </div>
    </>
  );
}

export default CartButtons;