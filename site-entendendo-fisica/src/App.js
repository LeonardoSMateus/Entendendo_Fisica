import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderNavbar from './Components/HeaderNavbar';
import TabsNav from './Components/TabsNav';
import About from './Components/About';
import Team from './Components/Team';
import Footer from './Components/Footer';
import './Components/Styles/CarouselStyle.css';

function App() {
  return (
    <div className="App">
        <HeaderNavbar/>
        <About/>
        <TabsNav/>
        <Team/>
        <Footer/>
    </div>
  );
}

export default App;
