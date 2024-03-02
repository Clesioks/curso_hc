import { useState } from "react"


const MultiSelecao = () => {

const [items, setItems] = useState([
    {id: 123, name: "Item 1", isSelected: false},
    {id: 232, name: "Item 2", isSelected: false},
    {id: 237, name: "Item 3", isSelected: false},
    {id: 754, name: "Item 4", isSelected: false}
]) 

const selectedCount = items.filter((item) => item.isSelected).length

const handleItemClick = (id) => {
  setItems(items.map((item) => item.id === id ? {...item, isSelected: !item.isSelected} : item))

}

const handleSelectAll = () => {
  setItems(items.map((item) => ({...item, isSelected: true})))
}

const deshandleSelectAll = () => {
  setItems(items.map((item) => ({...item, isSelected: false})))
}

  return (
    <div>
      <button onClick={handleSelectAll}>Selecionar todos</button>
      <button onClick={deshandleSelectAll}>DesSelecionar todos</button>

      <p>{selectedCount} item(s) selecionados: </p>
        <ul>
        {items.map((item, index) => (
          <div key={index}>
         <li style={{background: item.isSelected ? "lightgreen" : "none"}} onClick={() => handleItemClick(item.id)}>
           {item.id} - {item.name}
         </li>    
         </div>      
        ))}
        </ul>
    </div>
  )
}

export default MultiSelecao