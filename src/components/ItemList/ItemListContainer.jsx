import ItemList from "./ItemList"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {FadeLoader} from "react-spinners"
import { database } from "../../firebaseConfig";
import {getDocs, collection, query, where} from "firebase/firestore"

const ItemListContainer = () => {

    const [ items , setItems] = useState([])

    const {categoryName} = useParams()

    useEffect( () => {
        let consulta;
        const itemCollection = collection(database, "products")
        if(categoryName){
            const q = query( itemCollection, where("category", "==", categoryName))
            consulta = q
        }else{
            consulta = itemCollection
        }

        getDocs(consulta)
        .then(res=> {
            const products = res.docs.map(product =>{
                return{
                    ...product.data(),
                    id: product.id
                }
            })
            setItems(products)
        })
        .catch(err=> console.log(err))

    }, [categoryName]);

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