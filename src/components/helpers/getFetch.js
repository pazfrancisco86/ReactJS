let productos = [
    {
        id: "1",
        title: "Elemento",
        price: 300,
        img:"../Img/icoil.jpg",
    },
    {
        id: "2",
        title: "Elemento2",
        price: 600,
        img:"../Img/icoil.jpg",
    },
    {
        id: "3",
        title: "Elemento3",
        price: 900,
        img:"../Img/icoil.jpg",
    }
];

export const getFetch = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productos)
        },3000)
    })
}