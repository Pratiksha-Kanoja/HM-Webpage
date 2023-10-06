import { Route, Routes } from 'react-router-dom';
// import Homepage from './Mainpages/Homepage';
// import Men from './Mainpages/Men';
// import Shoppingbag from './Mainpages/Shoppingbag';
import Extrahome from './Extra-component/Extrahome';

// import Singleproduct from './Mainpages/Singleproduct';
function App() {
  return (
    <div>
      <Routes>

        {/* <Route path='/' element={<Homepage/>} />
        <Route exact path='/Men' element={<Men />} />
        <Route exact path='/cart' element={<Shoppingbag />} />
        <Route exact path='/cart/Productpage.1021953016' element={<Singleproduct />} /> */}
        <Route path='/' element={<Extrahome/>} />
      </Routes>
    </div>

  );
}

export default App;
