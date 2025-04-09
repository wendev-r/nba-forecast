import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}

export default App;
