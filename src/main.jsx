import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import Payment from './Payment.jsx';
import Root from './Root.jsx';
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { CartProvider } from './contexts/CartContext.jsx'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,  
    children: [
      {
        index: true,
        path: "",  
        element: <App />,
      },
      {
        path: "payment", 
        element: <Payment />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> 
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);
