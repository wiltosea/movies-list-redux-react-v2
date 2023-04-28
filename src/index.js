import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Home from './views/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import MovieDetail from './views/MovieDetails';
import Favoritos from './views/Favoritos';
import { Provider } from 'react-redux';
import store from './store/store';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/movie/:id', element: <MovieDetail /> },
      { path: '/favoritos', element: <Favoritos /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
