
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;