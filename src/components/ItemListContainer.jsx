import React,{useEffect,useState} from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [cargando,setCargando] = useState(false)

    const productos = [
    { id: '1', nombre: "Charizard", img: "Charizard_(Base_Set_TCG).png", precio: "3.000" },
    { id: '2', nombre: "Blastoise", img: "Blastoise_(Base_Set_TCG).png", precio: "2.000" },
    { id: '3', nombre: "Venasaur", img: "Venusaur_(Base_Set_2_TCG).jpg", precio: "1.000" },
    { id: '4', nombre: "Pikachu", img: "Raichu_(Base_Set_TCG).png", precio: "5.000" },
    { id: '5', nombre: "Mewtwo", img: "Mewtwo_(Base_Set_TCG).png", precio: "6.000" },
    { id: '6', nombre: "Clefairy", img: "Clefairy_(Base_Set_TCG).png", precio: "7.000" },
    { id: '7', nombre: "Machamp", img: "Machamp_(Base_Set_TCG).png", precio: "8.000" },
    { id: '8', nombre: "Dragonair", img: "Dragonair_(Base_Set_TCG).png", precio: "1.500" }
]

const getProducts = new Promise ((resolve,reject) => {

   let condition = true 
   if (condition) {
       setTimeout(()=>{
            resolve(productos)
       },3000)
   }else{
       reject('se pico :(')
   }
})

useEffect(()=>{
    setCargando(true)
  getProducts
  .then((res) => setListaProductos(res))  
  .catch((error) => console.log(error))
  .finally (()=> setCargando(false))
}, [])



      return (
    <div>
        {cargando ? <p>Loading..</p> : <ItemList listaProductos={listaProductos}/>}
    </div>
  )
}


export default ItemListContainer