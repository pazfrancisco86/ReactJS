import React from 'react';
import { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch"
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList"



const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams()

useEffect(()=> {
  if(categoryId){
  getFetch()
    .then((resp)=> {
      setData(resp.filter((products)=> products.category === categoryId))
      setLoading(false)
    })
    .catch(err => console.log(err))
  }else{
    getFetch()
    .then((resp)=> {
      setData(resp)
      setLoading(false)
    })
    .catch(err => console.log(err))
  }
}, [categoryId])

  return (
    <div>
      { loading ? <h1>Cargando...</h1>:
      <div style={{display: "flex", flexDirection:"row", flexWrap:"wrap"}}>
        <ItemList products={data} title={title}/>
      </div>
      }
    </div>
  )
}

export default ItemListContainer