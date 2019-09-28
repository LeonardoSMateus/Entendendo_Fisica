import React from 'react';
import {Container, Row, Col, Nav, Navbar} from 'react-bootstrap';
import './Styles/Footer.css';
import 'C:/Users/LeoSouza/Desktop/UTFPR/ENTENDENDO FÍSICA/site-entendendo-fisica/node_modules/font-awesome/css/font-awesome.min.css';

export default class Footer extends React.Component{
    render(){
        return (
            <div id="rodape" width="100%"> 
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#Inicio"> Entendendo Fisica</Navbar.Brand>
                    <Navbar.Brand href="yotube.com"><i class="fab fa-youtube" id="icon"></i></Navbar.Brand>
                    <Navbar.Brand href="facebook.com"><i class="fab fa-facebook-square" id="icon"></i></Navbar.Brand>
                    <Navbar.Brand href="instagram.com"><i class="fab fa-instagram" id="icon"></i></Navbar.Brand>
                </Navbar>
                
            </div>
        )
    }
}
