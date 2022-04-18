import { useEffect } from "react"


const Nosotros = () => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log("Click en componente")
      
    }

    useEffect(() => {
        window.addEventListener('click', () => {
            console.log('Click en Window ')
        })
    }, [])

    return (
        <div onClick={handleClick}>
            <h2>Nosotros</h2>
            <hr/>
            <h3>Somos una empresa dedicada a la compra y venta de Cartas Pokemon Originales</h3>
            <hr/>
        </div>
    )
}

export default Nosotros