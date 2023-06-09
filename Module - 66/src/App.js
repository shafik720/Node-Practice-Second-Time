import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import ShowProduct from './pages/Home/ShowProduct/ShowProduct';
import AddProduct from './pages/AddProduct/AddProduct';
import EditProduct from './pages/EditProduct/EditProduct';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import Services from './pages/Services/Services';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Bookings from './pages/Bookings/Bookings';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      // loader : ()=> fetch('http://localhost:5000/products'),
      element: <Home></Home>,
      children: [
        {
          path: '/',
          element: <PrivateRoute><Services></Services></PrivateRoute>
        },
        {
          path: '/addProduct',
          element: <AddProduct></AddProduct>,
        },
        {
          path: '/viewProduct',
          element: <ShowProduct></ShowProduct>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/bookings',
          element: <Bookings></Bookings>,
        },
        {
          path: '/editProduct/:id',
          element: <EditProduct></EditProduct>,
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
