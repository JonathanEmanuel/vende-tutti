import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import {data } from "../../data/data";



export default function ItemListContainer(props){
    const [productos, setProductos] = useState('');
    const [cargando, setCargando] = useState(true);
    const {categoryId} = useParams();

    useEffect( () => {
        setCargando(true);
        const listaProductos = new Promise((res, rej)=>{
            setTimeout( ()=> {
                res(data)
            }, 3000)
        })

        listaProductos.then( (data) => {
            if( categoryId ) { 
                setProductos( data.filter( (producto) => producto.category === categoryId))
            } else {
                setProductos(data)
            }
            setCargando(false)
        })
    }, [categoryId])
    return(

        <>
        <h2>{ props.name}</h2>
        { cargando ? <p>Cargando productos</p> : <ItemList productos={productos}/>}
        
        </>
    )
}