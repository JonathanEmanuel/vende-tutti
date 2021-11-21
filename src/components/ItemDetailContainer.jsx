import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { data } from '../data/data';
import { useParams } from 'react-router-dom';
import { db } from '../libs/firebaseConfig'
import { doc, getDoc} from 'firebase/firestore'



export const ItemDetailContainer = () => {
    const [item, setItem] = useState({}); 
    const [loader, setLoader] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoader(true);

        const item = doc( db, 'products', id )
        getDoc(item).then(res => {
            console.log(res.data(), id)
            const result = {...res.data(), id: res.id}
            setItem(result);
        
        }). finally(() => {
            setLoader(false);
        })


        /*
        const getItems = new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
        });

        getItems.then((res) => {
            setItem(res.find((item) => item.id ===  Number( id )));
        })
        .finally(() => setLoader(false));
        */
    }, [id]);

    return loader ? <h3>Cargando...</h3> : <ItemDetail {...item} />;
};
