import { Button } from "react-bootstrap"
import { useCartContext } from "../../contexts/cartContext"
import CartTable from "../../components/CartTable/CartTable"

const CartContainer = () => {
    const { cartList, totalPrice, removeCart } = useCartContext()

  return (
    <div>
    <Button variant="danger" onClick={removeCart }>
                    Borrar Todo
   </Button>
   <p>Total: $ {totalPrice()}</p>
    {
        cartList.map((item) => ( <CartTable item={item} key={item.product.id} />) )
    }</div>
  )
}

export default CartContainer