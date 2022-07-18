import React from 'react';
import { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [bool, setBool] = useState(true)
    const { id } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);

  useEffect(() => {
      const db = getFirestore()
      const queryProduct  = doc(db, "productos", id)
      getDoc(queryProduct) //promesa
      .then(resp => setData( { id:resp.id, ...resp.data() } ))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  }, [bool])

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