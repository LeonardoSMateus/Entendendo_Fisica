import React from 'react';
import Youtube from 'react-youtube';
import './Styles/Chapter.css'

export default class Chapter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {chapterInfo : props.chapterInfo};
        console.log(JSON.stringify(props.chapterInfo));
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
                <h1> {this.props.chapterInfo.videos[this.props.chapterInfo.currentIndex].title} </h1>

                <Youtube videoId={this.props.chapterInfo.videos[this.props.chapterInfo.currentIndex].videoId}
                    opts={opts}
                    onReady={this._onReady}
                />
                <br/>
                <br/>
            </div>
        );
    }
}