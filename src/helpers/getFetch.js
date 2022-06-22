import imagen from "../Img/icoil.jpg";

let productos = [
    {
        id: "1",
        title: "Coraje",
        categoria: "perro",
        price: 300,
        img:"https://i.pinimg.com/564x/a1/78/a0/a178a016a8d574e9a243de758d130037.jpg",
    },
    {
        id: "2",
        title: "Coraje 2",
        categoria: "perro",
        price: 600,
        img:"https://i.pinimg.com/564x/a1/78/a0/a178a016a8d574e9a243de758d130037.jpg",
    },
    {
        id: "3",
        title: "Coraje 3",
        categoria: "perro",
        price: 900,
        img:"https://i.pinimg.com/564x/a1/78/a0/a178a016a8d574e9a243de758d130037.jpg",
    },
    {
        id: "4",
        title: "Don Gato ",
        categoria: "gato",
        price: 300,
        img:"https://www.elgatofeliz.es/wp-content/uploads/2020/05/don-gato-nombre-gato-dibujo-animado-300x300-1.jpg",
    },
    {
        id: "5",
        title: "Don Gato 2",
        categoria: "gato",
        price: 600,
        img:"https://www.elgatofeliz.es/wp-content/uploads/2020/05/don-gato-nombre-gato-dibujo-animado-300x300-1.jpg",
    },
    {
        id: "6",
        title: "Don Gato 3",
        categoria: "gato",
        price: 900,
        img:"https://www.elgatofeliz.es/wp-content/uploads/2020/05/don-gato-nombre-gato-dibujo-animado-300x300-1.jpg",
    },
    {
        id: "7",
        title: "Bugs ",
        categoria: "wonejo",
        price: 300,
        img:"https://i.pinimg.com/564x/b8/0c/d8/b80cd8f5a5f705f8714da55405f2958d.jpg",
    },
    {
        id: "8",
        title: "Bugs 2",
        categoria: "wonejo",
        price: 600,
        img:"https://i.pinimg.com/564x/b8/0c/d8/b80cd8f5a5f705f8714da55405f2958d.jpg",
    },
    {
        id: "9",
        title: "Bugs 3",
        categoria: "wonejo",
        price: 900,
        img:"https://i.pinimg.com/564x/b8/0c/d8/b80cd8f5a5f705f8714da55405f2958d.jpg",
    }
];

export const getFetch = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
        resolve(productos)
        },2000)
    })
}
