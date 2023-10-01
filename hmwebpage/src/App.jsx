import { Route,Routes } from 'react-router-dom';
// import Homepage from './Mainpages/Homepage';
// import Men from './Mainpages/Men';
// import { useState } from 'react';
import Singleproduct from './Mainpages/Singleproduct';

function App() {
  // const [active, setActive] = useState(false);
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Homepage active={active} setActive={setActive}/>} />
        <Route path='/Men' element={<Men />} /> */}
        <Route path='/' element={<Singleproduct/>} />
      </Routes>
    </div>

  );
}

export default App;
