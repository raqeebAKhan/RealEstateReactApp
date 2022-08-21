import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Files/Home';
import Header from './Components.js/Header';
import PropertyDetails from './Files/PropertyDetails';
import Contact from './Components.js/Contact';
import Footer from './Components.js/Footer';



function App() {
  return (
    <div className='max-w-[1440px] h-12 mx-auto bg-white'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/property/:id' element={<PropertyDetails />} />
    </Routes>
    <Contact/>
   <Footer/>
  </div>
  );
}

export default App;
