import { useState, useEffect } from "react";
import { getFetchOne } from "../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getFetchOne()
      .then((resp)=> {
          setProducto(resp)
          setLoading(false)
        })
      .catch(err => console.log(err))
    }, [])

    return (
        <div>
            { loading ? <h1>Cargando detalle...</h1> :
        <div style={{flexDirection:"row", flexWrap:"wrap"}}>
        <ItemDetail producto={producto} />
        </div>
        }
        </div>
  )
}

export default ItemDetailContainer