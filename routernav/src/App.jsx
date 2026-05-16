import { Outlet, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>{' '}
        |{' '}
        <NavLink to="about">
          About
        </NavLink>{' '}
        |{' '}
        <NavLink to="contact">
          Contact
        </NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default App;
