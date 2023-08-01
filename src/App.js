
import './App.css';
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Nav from './components/Nav';
import Shop from './components/Shop';
import Cart from './components/Cart';
import {ShopContextProvider} from "./components/shopContext"


function App() {
  return (
    <div className="">
      <ShopContextProvider>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
