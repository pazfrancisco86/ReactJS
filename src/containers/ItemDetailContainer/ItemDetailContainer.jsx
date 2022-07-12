import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/getFetch";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch()
        .then((resp)=> {
            setData(resp.filter((prod)=> prod.id === id))
            setLoading(false)
          })
        .catch(err => console.log(err))
       /*  .finally(console.log(data)) */
    }, [id])


    return (
        <div>
            { loading ? <h1>Cargando detalle...</h1> :
        <div style={{flexDirection:"row", flexWrap:"wrap"}}>
        <ItemDetail data={data} param={id} />
        </div>
        }
        </div>
  )
}

export default ItemDetailContainer