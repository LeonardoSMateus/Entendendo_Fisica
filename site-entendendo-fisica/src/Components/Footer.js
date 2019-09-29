import React from 'react';
import {Navbar, Row, Col} from 'react-bootstrap';
import './Styles/Footer.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends React.Component{
    render(){
        return (
            <div id="rodape" width="100%"> 
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#Inicio"> Entendendo Fisica</Navbar.Brand>
                    <Navbar.Brand href=""> <img src={require('../Assets/Imagens/logoface.png')} width="35px" /></Navbar.Brand>
                    <Navbar.Brand href="yotube.com"> <img src={require('../Assets/Imagens/logoyout.png')} width="60px" /></Navbar.Brand>
                    <Navbar.Brand href="yotube.com"> <img src={require('../Assets/Imagens/logoinsta.png')} width="35px" /></Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}
