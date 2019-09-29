import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import Chapter from './Chapter';
import Button from 'react-bootstrap/Button';
import './Styles/Tabsnav.css';

export default class TabsNav extends React.Component {

    constructor(props){
        super(props);
        this.title = props.title;
        this.videos = props.videos;
        //  [
        //     {
        //        "title": "Exercicio 1",
        //        "videoId": "aBlKPLeLU_s"
        //     },
        //     {
        //        "title": "Exercicio 2",
        //        "videoId": "aBlKPLeLU_s"
        //     },
        //     {
        //        "title": "Exercicio 3",
        //        "videoId": "aBlKPLeLU_s"
        //     }, {
        //        "title": "Exercicio 4",
        //        "videoId": "aBlKPLeLU_s"
        //     }
        //    ];
        this.state = {
            "currentIndex": 2
        };
        console.log("Tab render");
        
    }
  

    render() {
        return (
            <div id="div-conteudo">
                <br/>
                <Tabs>
                    <Tab eventKey="chapter1" title={this.title}>
                        <Container fluid={true}>
                            <Row >
                                <Col >
                                        {this.videos.map((video, index) =>
                                            <div key={index} style={{height: 100}}>
                                                <Row style={{paddingLeft: 10, paddingTop: 15}} >
                                                    < Button variant="primary" style={{height: 40, paddingLeft: 20}}  onClick={() => {this.setState({"currentIndex" : index}); console.log(this.state.currentIndex);}}>{video.title}</Button>
                                                </Row>
                                            </div>
                                        )}
                                    
                                 </Col>
                                 <Col xs={10}>
                                    <Chapter chapterInfo={{
                                        "videos": this.videos,
                                        "currentIndex": this.state.currentIndex
                                     }} />
                                </Col>
                             </Row>
                         </Container>
                     </Tab>
                 </Tabs>
             </div>
            
        );
    }
}