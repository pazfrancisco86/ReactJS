import { useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);

    const { id } = useParams()

    useEffect(() => {
      if(id){
        getFetch()
        .then((resp)=> {
            setProductos(resp.filter((producto)=> producto.id === id))
            setLoading(false)
          })
        .catch(err => console.log(err))
      }else{
        getFetch()
        .then((resp)=> {
            setProductos(resp)
            setLoading(false)
          })
        .catch(err => console.log(err))
      }
    }, [])


    return (
        <div>
            { loading ? <h1>Cargando detalle...</h1> :
        <div style={{flexDirection:"row", flexWrap:"wrap"}}>
        <ItemDetail productos={productos} />
        </div>
        }
        </div>
  )
}

export default ItemDetailContainer