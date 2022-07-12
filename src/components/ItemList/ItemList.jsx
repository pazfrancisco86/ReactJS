import Item from "../Item/Item"

const ItemList = ({ products, title }) => {
  return(
       products.map(prod => <Item key={prod.id} products={prod} />))
      
  }

export default ItemList