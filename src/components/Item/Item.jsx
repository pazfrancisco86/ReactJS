import React from 'react';
import { useEffect, useState } from 'react';
import { getFetch } from '../helpers/getFetch';


const Item = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch ()
        .then((resp)=> {
        setProductos(resp)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

  return (

    <div>
        { loading ?
        <h1>Cargando...</h1>
            : productos.map(prod =>
            <div key={prod.id} className='col-md-4 p-1'>
    <div className='card w-100 mt-5'>
    <div className='card-header'>
        {`${prod.title}`}
    </div>
    <div className='card-body'>
        <p>Precio: {prod.price}</p>
    </div>
    <div className='card-footer'>
        <button className='btn btn-outline-primary btn-block'>detalle del producto</button>
    </div>
    </div>
    </div>
        ) }
    </div>

  )
}

export default Item