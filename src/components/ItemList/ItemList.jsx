import ItemCard from "./ItemCard"
import style from "./ItemList.module.css"


const ItemList = ({items}) => {
  return (
    <div className={style.card}>
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