import React from 'react'

const Detail = ({ prod }) => {
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
        </div>
  )
}

export default Detail