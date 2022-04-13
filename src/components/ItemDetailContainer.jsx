import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore" 
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [cargandin, setCargandin] = useState (false)


    const {itemId} = useParams()
    useEffect(()=>{
        setCargandin(true)
        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
            .then(doc => {
                setProductDetail( {id: doc.id, ...doc.data()} )
            })
        .finally(()=>  {
            setCargandin(false)
            })
        }, [itemId])


    return (
        <div>
            {cargandin ? <p>Carganding</p> : <ItemDetail productDetail={productDetail}/>}
            </div>
      )
    }
    export default ItemDetailContainer


