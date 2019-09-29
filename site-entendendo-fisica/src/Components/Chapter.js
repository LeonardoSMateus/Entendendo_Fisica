import React from 'react';
import Youtube from 'react-youtube';
import './Styles/Chapter.css'

export default class Chapter extends React.Component {

    constructor(props) {
        super(props);
        this.chapterInfo = props.chapterInfo;
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        return (
            <div id="Conteudo">
                <h1> {this.chapterInfo.title} </h1>

                <Youtube videoId={this.chapterInfo.videos[this.chapterInfo.currentIndex].videoId}
                    opts={opts}
                    onReady={this._onReady}
                />
                <br/>
                <br/>
            </div>
        );
    }
}