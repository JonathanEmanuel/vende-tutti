import React, {useState, useEffect} from "react";
import ItemList from "../ItemList";
const datos = [
    {
        id: 1,
        name: "Producto 1",
        price: 100,
        img: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        name: "Producto 2",
        price: 200,
        img: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        name: "Producto 3",
        price: 300,
        img: "https://via.placeholder.com/150"
    },
]


export default function ItemListContainer(props){
    const [productos, setProductos] = useState('');
    const [cargando, setCargando] = useState(true);

    useEffect( () => {
        const listaProductos = new Promise((res, rej)=>{
            setTimeout( ()=> {
                res(datos)
            }, 3000)
        })
        listaProductos.then( (data) => {
            setProductos(data)
            setCargando(false)
        })
    })
    return(

        <>
        <h2>{ props.name}</h2>
        { cargando ? <p>Cargando produtos</p> : <ItemList productos={productos}/>}
        
        </>
    )
}