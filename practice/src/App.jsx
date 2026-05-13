import { useState } from "react";
import styles from "./app.module.css"
const App = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={`${styles.appContainer} ${styles.darkMode}`}>
      <h1 className={active ? styles.activeHeaderTitle : styles.inActiveHeaderTitle}>Hello, React!</h1>
      <p  className={styles.textContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, incidunt.</p>
    </div>

  )
}
export default App;