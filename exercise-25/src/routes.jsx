import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import Categories from './Categories';
import CategoryRecipes from './Categoryrecipes';
import NotFound from './NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'recipes',
        element: <RecipeList />,
      },
      {
        path: 'recipes/:id',
        element: <RecipeDetail />,
      },
      {
        path: 'categories',
        element: <Categories />,
        children: [
          {
            path: ':categoryId',
            element: <CategoryRecipes />,
          },
        ],
      },
    ],
  },
]);