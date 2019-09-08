import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default class HeaderNavbar extends React.Component{
    render(){
        return ( <div width="100%">
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="#home">Entendendo Fisica</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="#features">Sobre</Nav.Link>
                        <Nav.Link href="#home">Conteudos</Nav.Link>
                        <Nav.Link href="#features">Participantes</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="" className="mr-sm-2" />
                        <Button variant="outline-light">Pesquisar</Button>
                        </Form>
                    </Navbar>

                </div>
        );
    }
}