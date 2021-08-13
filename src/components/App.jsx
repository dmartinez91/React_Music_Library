import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    componentDidMount(){
        this.makeGetRequest();
        this.makeDeleteRequest();
        this.makePostRequest();
    }

    async makeGetRequest(){
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
        }
        catch(ex){
            console.log(ex);
        }
    }

    async makePostRequest(){
        try{
            let response = await axios.post('http://127.0.0.1:8000/music/')
        }
        catch(ex){
            console.log(ex);
        }
    }

    async makeDeleteRequest(){
        try{
            let response = await axios.delete('http://127.0.0.1:8000/music/')
        }
        catch(ex){
            console.log(ex);
        }
    }

    render() { 
        return ( 
            <h1>HERYUB</h1>
         );
    }
}
 
export default App;