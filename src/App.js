import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './home/Home.jsx';
function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}

export default App;
