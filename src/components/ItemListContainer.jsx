import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import { getProducts } from '../mocks/fakeApi';
import {ItemList}  from './ItemList';

const ItemListContainer = () => {



    const [listaProductos, setListaProductos] = useState([]);
    const [cargando,setCargando] = useState(false)


    const {categoryId} = useParams()
    console.log(categoryId)

useEffect(()=>{
    setCargando(true)
  getProducts
  .then((res) => {
    setListaProductos( res )
    if (categoryId) {
      setListaProductos( res.filter( (prod) => prod.category === categoryId ) )
    } else {
      setListaProductos( res )
    }
})

.catch((error) => console.log(error))
  .finally (()=> setCargando(false))

}, [categoryId])


return (
  <div>
      {cargando ? <p>Loading..</p> : <ItemList listaProductos={listaProductos}/>}
  </div>
)
}
export default ItemListContainer
