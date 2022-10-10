import React from "react";
import {Component}  from "react";
import Scroll from './Scroll';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox'
import { robots } from "./robots";

class Apps extends Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }
 /*    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}));
    } */
    onsearchchange=(event)=>{
        this.setState({searchfield:event.target.value})
            
    }
    render(){
       
        const filterdrobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })
            if (this.state.robots.length===0){
                return <h1 className="tc">Loading....</h1>
            }
            else{
        return(
            <div className="tc">
                <h1 className="f1">ATTACK ON ROBOTS</h1>
                <SearchBox searchchange={this.onsearchchange}/>
                <Scroll>
            <Cardlist robots={filterdrobots}/>
            </Scroll>
            </div>
        );}
    }
}

export default Apps