import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home.jsx';
import Stats from './stats/Stats.jsx';
import NavBar from './Components/Common/NavBar.jsx';
import About from './about/About.jsx';
import { StatCategoryProvider } from './contexts/StatCategoryContext.jsx';
function App() {
  return (
    <StatCategoryProvider>
    <>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/about" element={<About />} />
        </Routes>
      
    </>
    </StatCategoryProvider >
  )
}

export default App;
