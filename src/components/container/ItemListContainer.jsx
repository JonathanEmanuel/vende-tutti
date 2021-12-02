import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import { db } from '../../libs/firebaseConfig'
import { collection, query, where, getDocs} from 'firebase/firestore'


export default function ItemListContainer(props){
    const [productos, setProductos] = useState('');
    const [cargando, setCargando] = useState(true);
    const {categoryId} = useParams();

    useEffect( () => {
        setCargando(true);

        const getProductos =  categoryId ? 
                query( collection(db, 'products'), where('category', '==', categoryId))
                :collection(db, 'products');


        getDocs(getProductos).then(res => {
            const results = res.docs.map(doc => {
                return {...doc.data(), id: doc.id} 
            })

            setProductos(results);
        })
        .finally(() => {
            setCargando(false);
        })

    }, [categoryId])
    return(
        <>
        <h2>{props.name}</h2>
        { cargando ? <p>Cargando productos</p> : <ItemList productos={productos}/>}
        </>
    )
}