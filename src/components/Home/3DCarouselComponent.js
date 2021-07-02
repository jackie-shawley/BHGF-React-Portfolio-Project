import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";


export default class NewCarousel extends Component {
    state = {
      goToSlide: 0,
      offsetRadius: 3,
      showNavigation: true,
      config: config.slow
    };
  
    slides = [
      {
        key: 0,
        content: <img src='/images/cakes/ruffle cake black background.png' alt="Ruffle Cake" />
      },
      {
        key: 1,
        content: <img src='/images/cafe/tea on linen resized.png' alt="Cup of tea" />
      },
      {
        key: 2,
        content: <img src='/images/cookies/doggie cookies.jpeg' alt="Dog sugar cookies" />
      },
      {
        key: 3,
        content: <img src='/images/cafe/circle of drinks cropped.png' alt="Cups of coffee and tea" />
      }
    ].map((slide, index) => {
      return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });
  
    onChangeInput = e => {
        this.setState({
          [e.target.name]: parseInt(e.target.value, 10) || 0
        });
      };
  
    render() {
      return (
        <div style={{ width: "80%", height: "500px", margin: "50px auto" }}>
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
         
        </div>
      );
    }
  }


  