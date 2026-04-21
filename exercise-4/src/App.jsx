import {useState}  from "react"

function App() {
    const [isTurn, setIsTurn] = useState(false);
    const toggle = () => {
        setIsTurn(!isTurn);
    }
   
    
    return (
        <>
        <p>The button is {isTurn ? "on" : "off"}</p>
        <button onClick={toggle}>{isTurn ? "Turn off" : "Turn on"}</button>
      
      
        
        </>
      


    )
}
export default App;