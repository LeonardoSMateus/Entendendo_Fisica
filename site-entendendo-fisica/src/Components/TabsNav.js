import React from 'react';

import {Tabs, Tab} from 'react-bootstrap';
import Chapter from './Chapter';

export default class TabsNav extends React.Component{
    render(){
        return(
            <Tabs>
                <Tab eventKey="chapter1" title="capitulo1">
                    <Chapter chapterInfo={{
                        "title":"Capitulo 1",
                        "videos": [
                            {
                                "videoId":"aBlKPLeLU_s"
                            },
                            {
                                "videoId":"aBlKPLeLU_s"
                            },
                            {
                                "videoId":"aBlKPLeLU_s"
                            }
                        ]
                    }}/>
                </Tab>
                <Tab eventKey="chapter2" title="capitulo2">
                    <Chapter chapterInfo={{
                        "title":"Capitulo 2",
                        "videos": [
                            {
                                "videoId":"aBlKPLeLU_s"
                            }
                        ]
                    }}/>
                </Tab>

            </Tabs>
        );
    }
}