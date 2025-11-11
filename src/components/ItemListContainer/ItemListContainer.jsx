import "./ItemListContainer.css";
import {useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        (async () => {
            try{
            const response = await fetch('/productos.json')
            const data = await response.json()
            setProductos(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <div className= 'item-list-container'>
            {
                productos.map((producto) => {
                    return <ItemDetail key={producto.id} product={producto} />
                })
            }
        </div>
    )
}

export default ItemListContainer