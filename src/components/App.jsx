import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayMusicTable from './DisplayMusicTable/DisplayMusicTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayMusic: []
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
            console.log(this)
            this.setState({
                displayMusic: response.data
            });
        }
        catch(ex){
            console.log(ex);
        }
    }

    async makePostRequest(){
        try{
            let response = await axios.post('http://127.0.0.1:8000/music/');
        }
        catch(ex){
            console.log(ex);
        }
    }

    async makeDeleteRequest(){
        try{
            let response = await axios.delete('http://127.0.0.1:8000/music/');
            this.setState({
                deleteMusic: response.data
            });
        }
        catch(ex){
            console.log(ex);
        }
    }

    render() { 
        return ( 
            <h1>
                <DisplayMusicTable showMusic={this.state.displayMusic} deleteRow={this.makeDeleteRequest}/>
            </h1>
         );
    }
}
 
export default App;