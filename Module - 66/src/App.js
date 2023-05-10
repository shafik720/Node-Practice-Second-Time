import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
