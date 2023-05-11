import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import ShowProduct from './pages/Home/ShowProduct/ShowProduct';
import AddProduct from './pages/AddProduct/AddProduct';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Home></Home>,
      children : [
        {path: '/', element: <AddProduct></AddProduct>},
        {path : '/viewProduct', element : <ShowProduct></ShowProduct>}
      ]
    }
  ])
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
