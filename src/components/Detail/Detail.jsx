import ButtonIn from '../../containers/ButtonIn/ButtonIn'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'

const Detail = ({ prod }) => {

  const [estado, setEstado] = useState('button')

  const onAdd = (cont) => {
    console.log(cont)
    setEstado('otraCosa')
  }

  return (
    <div>
    <div className="row">
    <div className="col-md-6">
    <h2>{`Este ${prod.categoria} viene con todas las caracteristicas que uno necesita para una buena compañia!`}</h2>
    </div>
    <div className="col-md-6">
    <img src={prod.img}/>
    <h3>{prod.price}</h3>
    </div>
    </div>
    <div className='row'>
      <div className='col'>
      {
        estado === 'button' ?
      <ItemCount stock={5} initial={1} onAdd = {onAdd}/>
      :
      <ButtonIn/>
      }
      </div>
    </div>
        </div>
  )
}

export default Detail