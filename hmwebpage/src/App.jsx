import { Route,Routes } from 'react-router-dom';
import Homepage from './Mainpages/Homepage';
import Men from './Mainpages/Men';
// import Register from './Components/Register';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Men' element={<Men />} />
        {/* <Route path='/' element={<Register />} /> */}
      </Routes>
    </div>

  );
}

export default App;
