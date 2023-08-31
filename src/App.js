import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Contact/Contact';
import Home from './Home/Home';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './redux/store';
import CartItems from './Cart/CartItems';
import ProductsGrid from './products/ProductsGrid';
import NavBar from './components/NavBar';


export default function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
     <Routes>
        <Route index path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Cart" element={<CartItems />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Products" element={<ProductsGrid />} />


      </Routes>
     
    </div>
    
    </>
     

    
  );
}

