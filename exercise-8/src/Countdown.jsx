import { useState, useEffect }  from "react";
const Countdown = () => {
    const [initialTime, setInitialTime] = useState(30);
    const [liftTime, setLiftTime] = useState(30);
    const [isRunning, setisRunning] = useState(false);
    return (
    <div>
        <h2>Countdown Timer</h2>
        <label>Set time (seconds):</label>
        <input type="text" />

        <p>Time Left {time} second</p>
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>

    </div>
    )
}
export default Countdown;