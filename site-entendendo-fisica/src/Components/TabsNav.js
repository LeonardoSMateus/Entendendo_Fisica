import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import Chapter from './Chapter';
import Button from 'react-bootstrap/Button';
import './Styles/Tabsnav.css';
import searchYoutube from 'youtube-api-v3-search';
import axios from 'axios'

const playListListURL = 'https://www.googleapis.com/youtube/v3/playlists?key={0}&channelId={1}&part=snippet';
const playListVideosListURL = 'https://www.googleapis.com/youtube/v3/playlistItems?key={0}&playlistId={1}&part=snippet';
const key = 'AIzaSyDdgRaXKsl-Ki6y7sjdZe7C_rOjfNZoy3k';
const channelId = 'UCZIa48FCMRKEeebJzxMmPqw';

export default class TabsNav extends React.Component {
    
    constructor(props){
        super(props);
        String.prototype.format = function() {
            let a = this;
            for (let k in arguments) {
                a = a.replace("{" + k + "}", arguments[k])
            }
            return a
        }
        

        this.title = props.title;
        this.videos = [];
        var self = this;
        axios.get(playListListURL.format(key, channelId))
        .then(function(playListResponse){
                playListResponse.data.items.map(function (item) {
                    // console.log(JSON.stringify(item.id));
                    // console.log(item.snippet.title);
               
                    axios.get(playListVideosListURL.format(key, item.id))
                    .then(function(videosResponse){
                        videosResponse.data.items.map(function (item) {
                            self.videos.push({
                                "title": item.snippet.title,
                                "videoId": item.snippet.resourceId.videoId
                             })
                        })
                        self.forceUpdate();
                        console.log(JSON.stringify(self.videos));
                    }
                )
                    
            })}
        )
        this.state = {
            "currentIndex": 0
        };
    }
  

    render() {
        if(this.videos.length > 0){
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
        }else{
            return <div>HIAHIjsD</div>
        }
    }
}