import './App.scss';
import Header from './Components/Header/Header';
import Events from "./Components/Events/Events";
import Food from "./Components/Food/Food";
import Schedule from "./Components/Schedule/Schedule";
import About from "./Components/About/About";
import Hero from "./Components/HeroFolder/Hero";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  window.onload = function () {
    var back = document.querySelector('.App')
    back.onmousemove = function (e) {
      var x = e.pageX - back.offsetLeft - back.offsetParent.offsetLeft
      var y = e.pageY - back.offsetTop - back.offsetParent.offsetTop
      back.style.setProperty('--x', x + 'px')
      back.style.setProperty('--y', y + 'px')
    }
  }
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<><Header/> <Events/></>} />
          <Route path="/Food&Beverages" element={<><Header/> <Food /></>} />
          <Route path="/Schedule" element={<><Header/> <Schedule /></>} />
          <Route path="/About" element={<><Header/> <About /></>} />
        </Routes>
      </div>
      <Routes>
        <Route path="/Hero" element={<Hero/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
