import React from 'react';
import { useState } from 'react'
import ButtonIn from '../../containers/ButtonIn/ButtonIn'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ data }) => {
  const [state, setState] = useState('button')

    return (
          data.map(prod => 
          <div key={prod.id}>
          <div className="row">
          <div className="col-md-6">
          <h2>{`Este ${prod.category} viene con todas las caracteristicas que uno necesita para una buena compañia!`}</h2>
          </div>
          <div className="col-md-6">
          <img alt="Mascota" src={prod.img}/>
          <h3>{prod.price}</h3>
          </div>
          </div>
          <div className='row'>
            <div className='col'>
            {
              state === 'button' ?
            <ItemCount data={{prod}} setState={setState} stock={5} initial={1}/>
            :
            <ButtonIn/>
            }
            </div>
          </div>
              </div>
            )
    )
}
export default ItemDetail
