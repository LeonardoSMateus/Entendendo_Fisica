import React from 'react';

import Youtube from 'react-youtube';

export default class Chapter extends React.Component{

    constructor(props){
        super(props);
        this.chapterInfo = props.chapterInfo;
    }
    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0
            }
          };
        return (
            <div>
                <h1> {this.chapterInfo.title} </h1>
                {this.chapterInfo.videos.map((video, index)=>
                    <div key={index}>
                        <Youtube videoId={video.videoId} 
                            opts={opts}
                            onReady={this._onReady}
                           />
                    </div>
                 )}
            </div>
        );
    }
}