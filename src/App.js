import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CardSwiper from './Simple-Card/01_swiper';
import Scroller from './Simple-Card/scroller';
import Vertical from './Simple-Card/verticalScroll';
import Description from './Simple-Card/descriptionCard';
import Effective from './Simple-Card/02_swiper';
import Cube from './Simple-Card/03_swiper';
import Coverflow from './Simple-Card/04_swiper';
import Flip from './Simple-Card/05_swiper';
import Card from './Simple-Card/06_swiper';
import Parallelex from './Simple-Card/07_swiper';
import Zooming from './Simple-Card/08_swiper';


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<CardSwiper />} />
      <Route path="/scroll" element={<Scroller />} />
      <Route path="/vertical" element={<Vertical />} />
      <Route path="/description" element={<Description/>} />
      <Route path="/effective" element={<Effective/>} />
      <Route path="/cube" element={<Cube/>} />
      <Route path="/coverflow" element={<Coverflow/>} />
      <Route path="/flip" element={<Flip/>} />
      <Route path="/card" element={<Card/>} />
      <Route path="/parallax" element={<Parallelex/>} />
      <Route path="/zoom" element={<Zooming/>} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
