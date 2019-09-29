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
                                <img src={require('../Assets/Imagens/Sandra/perfil-n.gif')} alt="Foto Pefil" className="card-img-top"/>
                            </div>
                            <div className="card-body text-dark">
                                <h2 className="card-title">Sandra Mara Domiciano</h2>
                                <p className="card-text text-sencondary">
                                    <label>Função: Orientadora do Projeto</label>
                                    <label>        Professora do Projeto</label>
                                </p>
                                <a href="https://www.facebook.com/sandramara.domiciano.9" className="btn btn-outline-primary" id="button">Facebook</a>
                                <a href="#" className="btn btn-outline-danger" id="button">Instagram</a>
                                <a href="#" className="btn btn-outline-info" id="button">Linkedin</a>
                            </div>
                        </div>    
                    </div>
                    <div className="col-md-4" id="Adilson">
                        <div className="card text-center shadow">
                            <div className="overflow">
                                <img src={require('../Assets/Imagens/Adilson/perfil-a.jpg')} className="card-img-top" alt=""/>
                            </div>
                            <div className="card-body text-dark">
                                <h2 className="card-title">Adilson Frank Neia</h2>
                                <p className="card-text text-sencondary">
                                   <label>Função: Diretor da Comunicação</label>
                                   <label>Curso: Engenharia da Computação</label>
                                </p>
                                <a href="https://www.facebook.com/adilson.frankeneia" className="btn btn-outline-primary"id="button">Facebook</a>
                                <a href="#" className="btn btn-outline-danger"id="button">Instagram</a>
                                <a href="#" className="btn btn-outline-info"id="button">Linkedin</a>
                            </div>
                         </div> 
                    </div>
                    <div className="col-md-4" id="Carlos">
                        <div className="card text-center shadow">
                            <div className="overflow">
                                <img src={require('../Assets/Imagens/Carlos/perfil-c.jpg')} className="card-img-top"/>
                            </div>
                            <div className="card-body text-dark">
                                <h2 className="card-title">Carlos Vinicius</h2>
                                <p className="card-text text-sencondary">
                                    <label>Função: Desenvolvedor Web</label>
                                    <label>Curso: Engenharia da Computação</label>
                                </p>
                                <a href="https://www.facebook.com/profile.php?id=100007281492993" className="btn btn-outline-primary"id="button">Facebook</a>
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
                                <img src={require('../Assets/Imagens/Felipe/perfil-f.jpg')} className="card-img-top"/>
                            </div>
                            <div className="card-body text-dark">
                                <h2 className="card-title">Felipe Augusto</h2>
                                <p className="card-text text-sencondary">
                                    <label>Função: Editor de Video</label>
                                    <label> Desenvolvedor Web</label>
                                    <label>Curso: Engenharia da Computação</label>
                                </p>
                                <a href="https://www.facebook.com/felipe.augusto.79" className="btn btn-outline-primary" id="button">Facebook</a>
                                <a href="#" className="btn btn-outline-danger"id="button">Instagram</a>
                                <a href="#" className="btn btn-outline-info"id="button">Linkedin</a>
                            </div>
                         </div> 
                    </div>
                    <div className="col-md-4" id="Leonardo">
                        <div className="card text-center shadow">
                            <div className="overflow">
                                <img src={require('../Assets/Imagens/Leonardo/perfil-l.jpg')} className="card-img-top"/>
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
                                <img src={require('../Assets/Imagens/Nathan/perfil-n.jpg')} className="card-img-top"/>
                            </div>
                            <div className="card-body text-dark">
                                <h2 className="card-title">Nathan Roque</h2>
                                <p className="card-text text-sencondary">
                                    <label>Função: Diretor do Video</label>
                                    <label>Curso: Engenharia da Computação</label>
                                </p>
                                <a href="https://www.facebook.com/nathan.roque.10" className="btn btn-outline-primary"id="button">Facebook</a>
                                <a href="#" className="btn btn-outline-danger"id="button">Instagram</a>
                                <a href="#" className="btn btn-outline-info"id="button">Linkedin</a>
                            </div>
                         </div> 
                    </div>
                </Row>
                <br/>
                <br/>
             </div>
		    
	    );
    }
}	