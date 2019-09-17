import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Styles/SliderCarousel.css';

export default class SliderCarousel extends React.Component{

    constructor(props){
        super(props);
        this.images = props.images;
        this.styleCustom = props.styleCustom;
        this.carouselProps = props.carouselProps;
    }
    render(){
        return (<Carousel 
                    id="time"
                    showArrows={this.carouselProps.showArrows} 
                    showStatus={false} showThumbs={false} 
                    autoPlay={true} 
                    infiniteLoop={true} 
                    showIndicators={this.carouselProps.showIndicators}>

                    {this.images.map((image, index) => 

                         <div key={index} className={this.styleCustom}>
                            <img src={image}/>
                        </div>
                        
                    )}
                    <br/>
                    <br/>
                    <br/>
                </Carousel>
        );
    }
}