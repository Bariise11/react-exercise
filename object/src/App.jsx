import { useState } from "react"

function App() {
const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
const addItems = () => {
  setItems([...items, "orange"])
}
const removeItem = () => {
  setItems([...items, "orange"])
}

  return (
    <>
    <ul>
      {
        items.map(item => (
          <li>{item}</li>
        ))
      }
    </ul>
    <button onClick={addItems}>Add Item</button>
    <button onClick={removeItem}>Remove Item</button>
 



    </>
  )
}
export default App;