import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './home/Home.jsx';
import Stats from './stats/Stats.jsx';
import NavBar from './Components/Common/NavBar.jsx';
function App() {
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/stats" element={<Stats/>}/>
    </Routes>
    </>
  )
}

export default App;
