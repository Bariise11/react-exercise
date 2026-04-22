
import { useState  } from "react";
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };








    return (
        <div>
            <h2>To Do List</h2>
            <input type="text"
            value={inputValue}
            onChange={handleChange}
             placeholder="Enter to new to do"/>
            <button onClick={handleAddTodo}>Add Item</button>
            <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.text}</li>))}
            </ul>
        </div>
        
    )
}
export default TodoList;