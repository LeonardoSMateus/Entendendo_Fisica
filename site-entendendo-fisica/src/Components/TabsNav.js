import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import Chapter from './Chapter';
import Button from 'react-bootstrap/Button';

export default class TabsNav extends React.Component {

    render() {
        return (
            <Tabs>
                <Tab eventKey="chapter1" title="capitulo1">
                    <Container id="sobre">
                        <Row>
                            <Col>
                                {[
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
                                        "title": "Exercicio 3",
                                        "videoId": "aBlKPLeLU_s"
                                    }
                                ].map((video, index) =>
                                    <div key={index}>

                                        < Button>{video.title}</Button>
                                        <br></br>
                                    </div>
                                )}
                            </Col>
                            <Col>
                                <Chapter chapterInfo={{
                                    "title": "Capitulo 1",
                                    "videos": [
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
                                        }
                                    ],
                                    "currentIndex": 0
                                }} />
                            </Col>
                        </Row>
                    </Container>

                </Tab>

            </Tabs>
        );
    }
}