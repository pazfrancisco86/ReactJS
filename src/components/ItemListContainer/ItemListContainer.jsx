import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx"



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams()

useEffect(()=> {
  if(categoriaId){
  getFetch()
    .then((resp)=> {
      setProductos(resp.filter((producto)=> producto.categoria === categoriaId))
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
}, [categoriaId])

  return (
    <div>
      { loading ? <h1>Cargando...</h1>:
      <div style={{display: "flex", flexDirection:"row", flexWrap:"wrap"}}>
        <ItemList productos={productos}/>
      </div>
      }
    </div>
  )
}

export default ItemListContainer