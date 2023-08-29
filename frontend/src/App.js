
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Signup from './Pages/Signup';
import { CartProvider } from './Components/ContextReducer';
function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
      </Routes>
      
    </BrowserRouter>
      </CartProvider>
      
    </div>
  );
}

export default App;
