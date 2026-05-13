import { useState } from "react";
import Greeting from "./Greeting";


const App = () => {
  const [unreadMessages, setUnreadMessages] = useState(["Hi welcome to react, Have A nice day!"]);
return (
  <Greeting unreadMessages={unreadMessages} />

)
}
export default App;