const productos = [
    {
        nombre: 'Charizard',
        id: 1,
        desc: 'Escupe fuego que puede derretir rocas. Se sabe que causa incendios forestales sin querer',
        precio: 3000,
        img: 'https://static.wikia.nocookie.net/espokemon/images/e/e8/CharizardBS.jpg',
        stock: 5,
        category: 'Fuego'
    },
    {
        nombre: 'Blastoise',
        id: 2,
        desc: 'Un Pokémon brutal con cañones presurizados de agua en su caparazón. Son utilizados para golpes de alta velocidad.',
        precio: 2500,
        img: 'https://static.wikia.nocookie.net/espokemon/images/2/23/Blastoise_%28Base_Set_TCG%29.jpg',
        stock: 12,
        category: 'Agua'
    },
    {
        nombre: 'Venasaur',
        id: 3,
        desc: 'Esta planta florece húmeda cuando está absorbiendo la energía solar. Se mantiene en movimiento para buscar la luz del sol.',
        precio: 2000,
        img: 'https://static.wikia.nocookie.net/espokemon/images/2/29/Venusaur_%28Base_Set_2_TCG%29.jpg',
        stock: 30,
        category: 'Hierba'
    },
    {
        nombre: 'Pikachu',
        id: 4,
        desc: 'Cuando se juntan varios de estos Pokémon, su electricidad puede causar tormentas de rayos.',
        precio: 4500,
        img: 'https://static.wikia.nocookie.net/espokemon/images/d/d5/Raichu_Fossil.jpg',
        stock: 40,
        category: 'Eléctrico'
    },
    {
        nombre: 'Mewtwo',
        id: 5,
        desc: 'Un científico creó este Pokémon después de años de horribles experimentos de división de genes e ingeniería genética.',
        precio: 5500,
        img: 'https://static.wikia.nocookie.net/espokemon/images/2/25/Mewtwo_%28Base_Set_TCG%29.jpg',
        stock: 12,
        category: 'Psíquico'
    },
    {
        nombre: 'Clefairy',
        id: 6,
        desc: 'Su mágico y lindo encanto le otorga muchos admiradores. Es raro y sólo se encuentra en ciertas áreas.',
        precio: 6500,
        img: 'https://static.wikia.nocookie.net/espokemon/images/4/45/Clefairy_Base_Set.jpg',
        stock: 50,
        category: 'Neutro'
    },

    {
        nombre: 'Machamp',
        id: 7,
        desc: 'Con sus fuertes músculos, lanza poderosos puñetazos que envían a su víctima hacia el horizonte.',
        precio: 6500,
        img: 'https://static.wikia.nocookie.net/espokemon/images/7/72/Machamp_TCG.jpg',
        stock: 50,
        category: 'Tierra'
    },
    {
        nombre: 'Dragonait',
        id: 8,
        desc: 'Muy rara vez se logra ver a este Pokémon marino. Se dice que su intelignecia es parecida a la de los humanos.',
        precio: 6500,
        img: 'https://static.wikia.nocookie.net/espokemon/images/1/1a/Dragonair_%28Base_Set_TCG%29.jpg',
        stock: 49,
        category: 'Neutro'
    },
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