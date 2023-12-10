import { Route, Routes } from 'react-router-dom';
import Homepage from './Mainpages/Homepage';
import Men from './Mainpages/Men';
import Shoppingbag from './Mainpages/Shoppingbag';
// import Extrahome from './Extra-component/Extrahome';
import Singleproduct from './Mainpages/Singleproduct';
import Product from './Mainpages/Product';
import Login from './Components/Login';
import Register from './Components/Register';
// import Practice from './Mainpages/Practice';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route exact path='/Men' element={<Men />} />
        <Route path='/products' element={<Product />} />
        <Route exact path='/singleproduct/:id' element={<Singleproduct />} />
        <Route exact path='/cart' element={<Shoppingbag />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        {/* <Route exact path='/practice' element={<Practice />} /> */}
        
        
        {/* <Route path='/' element={<Extrahome />} /> */}
      </Routes>
    </div>

  );
}

export default App;
