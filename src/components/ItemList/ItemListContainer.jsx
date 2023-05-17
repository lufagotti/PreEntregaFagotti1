import ItemList from "./ItemList"
import { products } from "../../ProductsMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {FadeLoader} from "react-spinners"

const ItemListContainer = () => {

    const [ items , setItems] = useState([])

    const {categoryName} = useParams()

    useEffect( () => {
        const productFiltered = products.filter(prod => prod.category === categoryName)
        const tarea = new Promise ((resolve, reject) =>{
            setTimeout(()=>{
                resolve (categoryName ? productFiltered : products);
            },1000);
            });
        
            tarea
            .then((res) => setItems(res))
            .catch((error) => console.log (error))
        
    }, [categoryName]);

    // if(items.length === 0){
    //     return <div style={{display: "flex", justifyContent: "center", marginTop:"180px"}}>
    //         <FadeLoader color="#9c93b5" height={30} width={10} radius={8} margin={10}/>
    //     </div>
    // }


    return (
        <div>
            {
                items.length === 0 ? (<div style={{display: "flex", justifyContent: "center", marginTop:"180px"}}>
                <FadeLoader color="#9c93b5" height={30} width={10} radius={8} margin={10}/>
            </div>) :  (<ItemList items={items} />) }
            
        </div>
    )
}

export default ItemListContainer