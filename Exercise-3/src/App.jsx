import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">User List</h1>

      <UserCard name="Ali Ahmed" email="ali@gmail.com" />
      <UserCard name="Fatima Noor" email="fatima@gmail.com" />
      <UserCard name="Mohamed Yusuf" email="mohamed@gmail.com" />
      <UserCard name="Amina Hassan" email="amina@gmail.com" />
    </div>
  );
};

export default App;