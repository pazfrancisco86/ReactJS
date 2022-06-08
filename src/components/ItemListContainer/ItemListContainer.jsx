

const task = new Promise((resuelto, rechazo)=>{
  let condition = false
  if (condition) {
    resuelto("200 ok")
  }else{
    rechazo("404 not found")
  }
}
)



const ItemListContainer = () => {
  task
  .then((resp)=>console.log(resp), err=> console.log(err))

  return (
    <h1>Saludos simples mortales!</h1>
  )
}

export default ItemListContainer