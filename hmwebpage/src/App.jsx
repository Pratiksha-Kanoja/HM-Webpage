import { Route,Routes } from 'react-router-dom';
import Homepage from './Mainpages/Homepage';
import Men from './Mainpages/Men';
import Register from './Components/Register';
import Login from './Components/Login';
import Header from './Components/Header';

import { useState } from 'react';
function App() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage active={active} setActive={setActive}/>} />
        <Route path='/Men' element={<Men />} />
        <Route path='/Header' element={<Header />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
       
      </Routes>
    </div>

  );
}

export default App;
