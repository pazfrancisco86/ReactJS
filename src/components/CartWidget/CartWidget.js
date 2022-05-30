import cart from "../../cart.png"
const CartWidget = () => {
  return (
    <img
          alt="Carrito de pedidos"
          src={cart}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
  )
}

export default CartWidget