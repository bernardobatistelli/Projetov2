import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Product1, Product2, Product3, Product4 } from './pages/products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/products/1",
    element: <Product1 />
  },
  {
    path: "/products/2",
    element: <Product2 />
  },
  {
    path: "/products/3",
    element: <Product3 />
  },
  {
    path: "/products/4",
    element: <Product4 />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
