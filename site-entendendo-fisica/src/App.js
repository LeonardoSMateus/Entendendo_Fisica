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
        <TabsNav title="Capitulo 1" videos={[
            {
               "title": "Exercicio 1",
               "videoId": "aBlKPLeLU_s"
            },
            {
               "title": "Exercicio 2",
               "videoId": "aBlKPLeLU_s"
            },
            {
               "title": "Exercicio 3",
               "videoId": "aBlKPLeLU_s"
            }, {
               "title": "Exercicio 4",
               "videoId": "aBlKPLeLU_s"
            }
           ]}/>
        <Team/>
        <Footer/>
    </div>
  );
}

export default App;
