
import Shop from './Pages/Shop';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Navbar from './Component/Navbar/Navbar';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category = "men"/>} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />
          <Route path='/Bags' element={<ShopCategory category="Bags" />} />
          <Route path='/shoes' element={<ShopCategory category="shoes" />} />
          <Route path='/Blogs' element={<ShopCategory category="Blogs" />} />
          <Route path="product" element={<Product />}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
