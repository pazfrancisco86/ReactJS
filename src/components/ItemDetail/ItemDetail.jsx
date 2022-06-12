import { useState } from "react";

const ItemDetail = ({ producto }) => {

    return (
    <div className="row">
    <div className="col-md-6">
    <h2>{producto.title}</h2>
    </div>
    <div className="col-md-6">
    <img src={producto.img}/>
    <h3>{producto.price}</h3>
    </div>
    </div>
    )
}
export default ItemDetail
