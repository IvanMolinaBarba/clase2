import React, { useEffect, useState } from 'react'
import { getProducts } from '../mocks/fakeApi'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [cargandin, setCargandin] = useState (false)

    useEffect(()=>{
        setCargandin(true)
        getProducts
        .then((res) => setProductDetail(res.find((item) => item.id ==='1')))
        .catch((error) => console.log(error))
        .finally(()=> setCargandin(false))
    }, [])


    return (
        <div>
            {cargandin ? <p>Carganding</p> : <ItemDetail productDetail={productDetail}/>}
            </div>
      )
    }
    export default ItemDetailContainer


