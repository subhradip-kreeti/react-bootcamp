import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './Dashboard';

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
      ],
    },
  ],
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
