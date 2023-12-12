import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from "./pages/Shop";
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/clean' element={<ShopCategory category="clean"/>}/>
        <Route path='/style' element={<ShopCategory category="style"/>}/>
        <Route path='/oil' element={<ShopCategory category="oil"/>}/>
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path ='/cart' element={<Cart />} />
        <Route path ='/login' element={<LoginSignup />} />

        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
