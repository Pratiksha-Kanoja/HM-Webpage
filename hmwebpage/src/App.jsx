import { Route,Routes } from 'react-router-dom';
import Homepage from './Mainpages/Homepage';
import Men from './Mainpages/Men';
import Register from './Components/Register';
import Login from './Components/Login';
// import Header from './Components/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Men' element={<Men />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        {/* <Route path='/' element={<Header />} /> */}
      </Routes>
    </div>

  );
}

export default App;
