const productos = [
    { id:'1', nombre: 'Charizard', img:'https://static.wikia.nocookie.net/espokemon/images/e/e8/CharizardBS.jpg', precio: "$3.000" , desc:"Escupe fuego que puede derretir rocas. Se sabe que causa incendios forestales sin querer" , category:"Fuego"},
    { id:'2', nombre: 'Blastoise', img: 'https://static.wikia.nocookie.net/espokemon/images/2/23/Blastoise_%28Base_Set_TCG%29.jpg', precio: "$2.000" ,  category:"Agua" },
    { id:'3', nombre: 'Venasaur', img: 'https://static.wikia.nocookie.net/espokemon/images/2/29/Venusaur_%28Base_Set_2_TCG%29.jpg', precio: "$1.000", category:"Hierba" },
    { id:'4', nombre: 'Pikachu', img: 'https://static.wikia.nocookie.net/espokemon/images/d/d5/Raichu_Fossil.jpg', precio: "$5.000", category:"Electrico" },
    { id:'5', nombre: 'Mewtwo', img: 'https://static.wikia.nocookie.net/espokemon/images/2/25/Mewtwo_%28Base_Set_TCG%29.jpg', precio: "$6.000", category:"Psiquico" },
    { id:'6', nombre: 'Clefairy', img: 'https://static.wikia.nocookie.net/espokemon/images/4/45/Clefairy_Base_Set.jpg' , precio: "$7.000", category:"Neutro" },
    { id:'7', nombre: 'Machamp', img: 'https://static.wikia.nocookie.net/espokemon/images/7/72/Machamp_TCG.jpg', precio: "$8.000", category:"Tierra" },
    { id:'8', nombre: 'Dragonair', img: 'https://static.wikia.nocookie.net/espokemon/images/1/1a/Dragonair_%28Base_Set_TCG%29.jpg', precio: "$1.500" , category:"Agua" }
]

export const getProducts = new Promise ((resolve,reject) => {

   let condition = true 
   if (condition) {
       setTimeout(()=>{
            resolve(productos)
       },3000)
   }else{
       reject('se pico :(')
   }
})