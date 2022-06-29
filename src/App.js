import './App.css';
import { Navbar } from './Components/Navbar';
import {Routes, Route} from "react-router-dom";
import {Home} from "./Components/Home"
import { Login } from './Components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
