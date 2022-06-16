import Detail from "../Detail/Detail"

const ItemDetail = ({ productos }) => {
    return (
        productos.map(prod => <Detail key={prod.id} prod={prod} />
      )
    )
}
export default ItemDetail
