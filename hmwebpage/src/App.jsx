import { Route,Routes } from 'react-router-dom';
import Homepage from './Mainpages/Homepage';
import Men from './Mainpages/Men';
import Shoppingbag from './Mainpages/Shoppingbag';
import Singleproduct from './Mainpages/Singleproduct';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Men' element={<Men />} />
        <Route path='/cart' element={<Shoppingbag />} />
        <Route path='/cart/Productpage.1021953016' element={<Singleproduct />} />
      </Routes>
    </div>

  );
}

export default App;
