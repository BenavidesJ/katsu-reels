import { createBrowserRouter } from 'react-router-dom';
import { Home, TopRated } from '../screens';

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/top-rated',
    element: <TopRated />,
  },
  {
    path: '/top-rated/:id',
    element: <h1>Working on it</h1>,
  },
]);
