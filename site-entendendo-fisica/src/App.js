import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SliderCarousel from './Components/SliderCarousel';
import HeaderNavbar from './Components/HeaderNavbar';
import TabsNav from './Components/TabsNav';
import About from './Components/About';
import './Components/Styles/CarouselStyle.css';
function App() {
  return (
    <div className="App">
        <HeaderNavbar/>
        <About/>
        <SliderCarousel
          carouselProps={{showArrows:true, showIndicators:true}}
          styleCustom="CarouselSt"
          images={[
            require('./Assets/Imagens/Sandra/dados-S.png'),
            require("./Assets/Imagens/Adilson/dados-A.png"),
            require("./Assets/Imagens/Carlos/dados-C.png"),
            require("./Assets/Imagens/Felipe/dados-F.png"),
            require("./Assets/Imagens/Leonardo/dados-L.png"),
            require("./Assets/Imagens/Nathan/dados-N.png")
        ]}/>
        <TabsNav/>
 
    </div>
  );
}

export default App;
