import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './Styles/HeaderNavbar.css';


export default class HeaderNavbar extends React.Component{
    render(){
        return ( <div width="100%">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home" id="Inicio">Entendendo Fisica</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="#Sobre" id="menu">Sobre</Nav.Link>
                        <Nav.Link href="#Conteudo">Conteudos</Nav.Link>
                        <Nav.Link href="#Time">Participantes</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="" className="mr-sm-2" />
                        <Button variant="outline-info">Pesquisar</Button>
                        </Form>
                    </Navbar>

                </div>
        );
    }
}