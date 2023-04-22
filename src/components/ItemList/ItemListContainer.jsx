import ItemList from "./ItemList"
import { products } from "../../ProductsMock";
import { useState, useEffect } from "react";

const ItemListContainer = () => {

    const [ items , setItems] = useState([])

    useEffect( () => {
        const tarea = new Promise ((resolve, reject) =>{
            resolve (products);
            })
        
            tarea
            .then((res) => setItems(res))
            .catch((error) => console.log (error))
        
    }, [])


    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer