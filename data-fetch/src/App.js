
import './App.css';
import GetData from './component/GetData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import SigleProduct from './component/SigleProduct';
import Cart from './component/Cart';

import Normal from './component/Normal';
import ShopContextProvider from './context/ShopContextProvider';

function App() {
  return (
    
   <ShopContextProvider>
     <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path='/' element={<GetData/>}/>
      <Route path='/single/:id' element={<SigleProduct/>}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/practice' element={<Normal/>} />
     </Routes>
      </BrowserRouter>  
      </ShopContextProvider> 
  );
}

export default App;