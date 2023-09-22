
// import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './Homepage';
// import Header from './Components/Header';
// import Footer from './Components/Footer';

function App() {
  return (
    // <div className="App">
    //   <Routes>
    //     <Route path='/' element={<Homepage/>} />
    //     <Route path='/header' element={<Header/>} />
    //   </Routes>
    // </div>
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>

  );
}

export default App;
