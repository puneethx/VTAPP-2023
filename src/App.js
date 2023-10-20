import './App.scss';
import Header from './Components/Header/Header';
import Events from "./Components/Events/Events";
import Food from "./Components/Food/Food";
import Schedule from "./Components/Schedule/Schedule";
import About from "./Components/About/About";

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
        <Header />
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/Food&Beverages" element={<Food />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
