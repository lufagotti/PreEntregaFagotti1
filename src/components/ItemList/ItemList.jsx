import ItemCard from "./ItemCard"
import  "./ItemList.css"


const ItemList = ({items}) => {
  return (
    <div className="card">
      {
        items.map((item) => {
          return (
            <ItemCard item={item} key={item.id}/>
          )
        })
      }
    </div>
  )
}

export default ItemList