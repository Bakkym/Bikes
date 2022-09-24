// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio'
import Network from './components/Network'



function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/network/:id' element={<Network></Network>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
