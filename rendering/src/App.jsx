
const App = () => {
    const userList = [
    
        {
            name: "John Doe",
            email: "john@example.com"
        },
        {
            name: "jane",
            email: "jane@example.com",
            
        }
    ]
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {
                    userList.map((user, index) => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))
                }
            </ul>
           

        </div>

    )
}
export default App;