import { Route,Routes } from 'react-router-dom';
// import Homepage from './Mainpages/Homepage';
// import Men from './Mainpages/Men';
// import Singleproduct from './Mainpages/Singleproduct';
import Shoppingbag from './Mainpages/Shoppingbag';

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Homepage/>} />
        <Route path='/Men' element={<Men />} /> */}
        {/* <Route path='/' element={<Singleproduct/>} /> */}
        <Route path='/' element={<Shoppingbag/>} />
      </Routes>
    </div>

  );
}

export default App;
