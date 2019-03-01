import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize';

class NavigationBar extends Component{
    render(){
        return(
            <div className="navigator-bar">
                <Navbar brand={"Smash Watch"} right className="red darken-4">
                    <NavItem>Bracket</NavItem>
                    <NavItem>Ready Games</NavItem>
                    <NavItem>Preregister</NavItem>
                </Navbar>
            </div>
        )
    }
}

class Layout extends Component{
    render(){
        return(
            <div>
                <NavigationBar/>
                <div className="center-align"> 
                    {this.props.children}
                </div>
                <div style={{height:"5em"}}></div>
            </div>
        )
    }
}

export {
    Layout
}