import { Route,Routes } from 'react-router-dom';
import Homepage from './Mainpages/Homepage';
import Men from './Mainpages/Men';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Men' element={<Men />} />
      </Routes>
    </div>

  );
}

export default App;
