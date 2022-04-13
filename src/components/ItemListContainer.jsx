import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom"
import ItemList  from './ItemList'; 
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [cargando,setCargando] = useState(false)

    const {categoryId} = useParams()
    // console.log(categoryId)

useEffect(()=>{
    setCargando(true)

    const productosRef = collection(db, "productos")
    const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef

    getDocs(q)
            .then(resp => {
                const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                console.log(items)
                setListaProductos(items)
              })

  .finally (()=>  {
    setCargando(false)
  })
}, [categoryId])


return (
  <div>
      {cargando ? <p>Loading..</p> : <ItemList listaProductos={listaProductos}/>}
  </div>
)
}
export default ItemListContainer
