import React,{Component} from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './Styles/Team.css';


export default class Team extends React.Component {
    render() {
        return (
            <div id="Time">
                <br/>
                <br/>
                <Row className="container-fluid d-flex justify-content-center">
                    <div className="col-md-4" id="Sandra">
                        <div className="card text-center shadow">
                            <div className="overflow">
                                <img src="../Assets/Imagens/Projeto/Sandra/perfil-n.jpg" alt="Foto Pefil" className="card-img-top"/>
                            </div>
                            <div className="card-body text-dark">
                                <h2 className="card-title">Sandra Mara Domiciano</h2>
                                <p className="card-text text-sencondary">
                                    <label>Função: Orientadora do Projeto</label>
                                    <label>        Professora do Projeto</label>
                                </p>
                                <a href="#" className="btn btn-outline-primary" id="button">Facebook</a>
                                <a href="#" className="btn btn-outline-danger" id="button">Instagram</a>
                                <a href="#" className="btn btn-outline-info" id="button">Linkedin</a>
                            </div>
                        </div>    
                    </div>
                    <div className="col-md-4" id="Adilson">
                        <div className="card text-center shadow">
                            <div className="overflow">
                                <img src="C:/Users/LeoSouza/Desktop/UTFPR/ENTENDENDO FÍSICA/site-entendendo-fisica/src/Assets/Imagens/Adilson/perfil-a.jpeg" className="card-img-top" alt=""/>
                            </div>
                            <div className="card-body text-dark">
                                <h2 className="card-title">Adilson Frank Neia</h2>
                                <p className="card-text text-sencondary">
                                   <label>Função: Diretor da Comunicação</label>
                                   <label>Curso: Engenharia da Computação</label>
                                </p>
                                <a href="#" className="btn btn-outline-primary"id="button">Facebook</a>
                                <a href="#" className="btn btn-outline-danger"id="button">Instagram</a>
                                <a href="#" className="btn btn-outline-info"id="button">Linkedin</a>
                            </div>
                         </div> 
                    </div>
                    <div className="col-md-4" id="Carlos">
                        <div className="card text-center shadow">
                            <div className="overflow">
                                <img src="Assets/Imagens/Projeto/Carlos/perfil-c.jpeg" className="card-img-top"/>
                            </div>
                            <div className="card-body text-dark">
                                <h2 className="card-title">Carlos Vinicius</h2>
                                <p className="card-text text-sencondary">
                                    <label>Função: Desenvolvedor Web</label>
                                    <label>Curso: Engenharia da Computação</label>
                                </p>
                                <a href="#" className="btn btn-outline-primary"id="button">Facebook</a>
                                <a href="#" className="btn btn-outline-danger"id="button">Instagram</a>
                                <a href="#" className="btn btn-outline-info"id="button">Linkedin</a>
                            </div>
                         </div> 
                    </div>
                    </Row>
                    <br/>
                    <Row className="container-fluid d-flex justify-content-center">
                    <div className="col-md-4" id="Felipe">
                        <div className="card text-center shadow">
                            <div className="overflow">
                                <img src="Assets/Imagens/Projeto/Felipe/perfil-f.jpeg" className="card-img-top"/>
                            </div>
                            <div className="card-body text-dark">
                                <h2 className="card-title">Felipe Arruda</h2>
                                <p className="card-text text-sencondary">
                                    <label>Função: Editor de Video</label>
                                    <label> Desenvolvedor Web</label>
                                    <label>Curso: Engenharia da Computação</label>
                                </p>
                                <a href="#" className="btn btn-outline-primary" id="button">Facebook</a>
                                <a href="#" className="btn btn-outline-danger"id="button">Instagram</a>
                                <a href="#" className="btn btn-outline-info"id="button">Linkedin</a>
                            </div>
                         </div> 
                    </div>
                    <div className="col-md-4" id="Leonardo">
                        <div className="card text-center shadow">
                            <div className="overflow">
                                <img src="Assets/Imagens/Projeto/Leonardo/perfil-l.jpeg" className="card-img-top"/>
                            </div>
                            <div className="card-body text-dark">
                                <h2 className="card-title">Leonardo de Souza</h2>
                                <p className="card-text text-sencondary">
                                    <label>Função: Desenvolvedor Web</label>
                                    <label>Curso: Engenharia da Computação</label>
                                </p>
                                <a href="#" className="btn btn-outline-primary"id="button">Facebook</a>
                                <a href="#" className="btn btn-outline-danger"id="button">Instagram</a>
                                <a href="#" className="btn btn-outline-info"id="button">Linkedin</a>
                            </div>
                         </div> 
                    </div>
                    <div className="col-md-4" id="Nathan">
                        <div className="card text-center shadow">
                            <div className="overflow">
                                <img src="Assets/Imagens/Projeto/Nathan/perfil-n.jpeg" className="card-img-top"/>
                            </div>
                            <div className="card-body text-dark">
                                <h2 className="card-title">Nathan Roque</h2>
                                <p className="card-text text-sencondary">
                                    <label>Função: Diretor do Video</label>
                                    <label>Curso: Engenharia da Computação</label>
                                </p>
                                <a href="#" className="btn btn-outline-primary"id="button">Facebook</a>
                                <a href="#" className="btn btn-outline-danger"id="button">Instagram</a>
                                <a href="#" className="btn btn-outline-info"id="button">Linkedin</a>
                            </div>
                         </div> 
                    </div>
                </Row>
             </div>
		    
	    );
    }
}	