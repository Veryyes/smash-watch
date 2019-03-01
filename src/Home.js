import React, {Component} from 'react';
import {Layout} from './Layout.js';
import Carousel from 'react-materialize/lib/Carousel';
import Preloader from 'react-materialize/lib/Preloader';
import Button from 'react-materialize/lib/Button';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            slide_data: [],
        }
        fetch("http://192.168.1.78:5000/tournaments").then(
            (res) => {
                return res.json()
            }
        ).then(
            (tourneys) => {
                this.setState((prev) => {
                    return {
                        slide_data: tourneys
                    }
                })
                this.render();
            }
        )
    }

    render(){
        let tourney_select = (
                <div>
                    Loading
                    <br/>
                    <Preloader flashing size='small'/>
                </div>  
        );
        if(this.state.slide_data.length > 0){ 
            let slides = this.state.slide_data.map((slide, idx) => {
                return(
                    <div key={idx} className="carousel-slide">
                        <h5>{slide.name}</h5>
                        <img src={slide.game_img} alt={""}/><br/>
                        <Button className={"red darken-3"} >Select</Button>
                    </div>
                )
            });
            tourney_select = (
                <Carousel  
                    options={{ fullWidth: true , indicators: true}}
                    style={{height:"1000px"}}>
                    {slides}
                    
                </Carousel>
            );
        }
        return(
            <Layout>    
                <div className="Home">
                    <div className="content-container">
                        <h1 className="flow-text"><strong>A Tournament's Best Friend</strong></h1>
                        <p className="flow-text">
                            A simple tournament match tracker for Challonge brackets
                        </p>
                    </div>
                    <hr/>
                    <div className="content-container carousel-container">
                        <h3 className="flow-text">Select Your Tournament</h3>
                        <div>
                            {tourney_select}
                        </div>
                    </div>
                </div>
            </Layout>
            
        )
    }
}

export default Home;