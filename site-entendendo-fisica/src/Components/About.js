import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import SliderCarousel from './SliderCarousel';
import './Styles/About.css';
export default class About extends React.Component {
    render() {
        return (
            <div id="Sobre">
                <Container>
                    <Row>
                        <Col id="Texto">
                            <p>
                                O projeto entendendo física foi idealizado em 2018/1, possuindo o objetivo de ajudar alunos da UTFPR. 
                                A ideia surgiu através de uma permanência da professora Sandra Domiciano, quando os membros fizeram uma pequena análise do porque 
                                existe grande dificuldade na matéria de física, e foi notado que os mesmos geralmente não realizam exercícios e não 
                                comparecem em permanências/monitorias para sanar suas dúvidas.
                            </p>
                            <p>    
                                Portanto, o objetivo do projeto entendendo física é facilitar o acesso à exercícios propostos em sala, sendo 
                                então possível o aluno se orientar facilmente por meio de vídeos educativos, logo reforçando os conceitos, 
                                consolidando os conhecimentos aprendidos em sala e potencializar a aprendizagem.
                            </p>
                  
                         </Col>
                        <Col id="Carousel-img">
                            <SliderCarousel
                                styleCustom="Carousel"
                                carouselProps={{ showArrows: false, showIndicators: false }}
                                images={[
                                    require('../Assets/Imagens/Projeto/ft1.jpg'),
                                    require("../Assets/Imagens/Projeto/ft2.jpg"),
                                    require('../Assets/Imagens/Projeto/ft3.jpg')
                                ]}
                            />
                            <br />
                            <SliderCarousel
                                styleCustom="Carousel"
                                carouselProps={{ showArrows: false, showIndicators: false }}
                                images={[
                                    require('../Assets/Imagens/Projeto/ft4.jpg'),
                                    require("../Assets/Imagens/Projeto/ft5.jpg")
                                ]}
                            />
                         </Col>
                     </Row>
                 </Container>
                 <br/>
             </div>
            
        );
    }
}