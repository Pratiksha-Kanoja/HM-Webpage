import { Route, Routes } from 'react-router-dom';
import Homepage from './Mainpages/Homepage';
import Men from './Mainpages/Men';
import Shoppingbag from './Mainpages/Shoppingbag';
import Singleproduct from './Mainpages/Singleproduct';
// import Heart_Icon from './Components/Heart_Icon';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Men' element={<Men />} />
        <Route path='/cart' element={<Shoppingbag />} />
        <Route path='/cart/Productpage.1021953016' element={<Singleproduct />} />
        {/* <Route exact path='/' element={<Heart_Icon/>} /> */}
      </Routes>
    </div>

  );
}

export default App;
