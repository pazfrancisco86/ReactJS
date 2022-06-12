import imagen from "../Img/icoil.jpg";

let productos = [
    {
        id: "1",
        title: "Elemento",
        price: 300,
        img:{imagen},
    },
    {
        id: "2",
        title: "Elemento2",
        price: 600,
        img:{imagen},
    },
    {
        id: "3",
        title: "Elemento3",
        price: 900,
        img:{imagen},
    }
];

export const getFetch = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
        resolve(productos)
        },3000)
    })
}

let producto =
    {
        id: "1",
        title: "Elemento",
        price: 300,
        img:{imagen},
    }

export const getFetchOne = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(producto)
            },3000)
        })

    }