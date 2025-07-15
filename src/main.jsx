import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import Dashboard from './Dashboard';
import Author from './Author';
import Dogs from './Dogs';

import './index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      id: 'root',
      errorElement: (
        <p className="text-center">
          An unexpected error occurred. Please refresh the page and try again.
        </p>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: 'authors',
          element: <Author />,
          errorElement: <p> Error rendering page</p>,
        },
        {
          path: 'dogs',
          element: <Dogs />,
          errorElement: <p> Error rendering page</p>,
        },
      ],
    },
  ]
  // {
  //   basename: '/kreeti',
  // }
);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
