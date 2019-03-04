import React, {Component} from 'react';
import {Layout} from './Layout.js';
import queryString from 'query-string'


class Games extends Component{
    constructor(props){
        super(props)
        this.state = {
            url: ""
        }
        let params = queryString.parse(this.props.location.search);
        this.url = queryString.url;
    }
    render(){
        console.log(this.url)
        return(
            <Layout>
                <div className="Games">
                </div>
            </Layout>
            
        )
    }
}

export default Games;