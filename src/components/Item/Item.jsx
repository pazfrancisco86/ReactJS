
const Item = ({prod}) => {
    return (
        <div className='col-md-4 p-1'>
        <div className='card w-100 mt-5'>
        <div className='card-header'>
        {`${prod.title}`}
        </div>
        <div className='card-body'>
        <img src={prod.img} alt="mariob"></img>
        <p>Precio: {prod.price}</p>
        </div>
        <div className='card-footer'>
        <button className='btn btn-outline-primary btn-block'>detalle del producto</button>
        </div>
        </div>
        </div>
    )
}

export default Item