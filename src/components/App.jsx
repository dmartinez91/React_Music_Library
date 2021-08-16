import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayMusicTable from './DisplayMusicTable/DisplayMusicTable';
import SongForm from './SongForm/SongForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayMusic: [],   
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

    async makeDeleteRequest(id){
        try{
            let response = await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
            this.setState({
                displayMusic: response.data
            });
        }
        catch(ex){
            console.log(ex);
        }
    }

    addNewSong = async(newSong) => {
        let response = await axios.post(`http://127.0.0.1:8000/music/`, newSong);
        let newArray = this.state.displayMusic;
        newArray.push(newSong)
        this.setState({
            displayMusic: newArray
        })
    };

    render() { 
        return ( 
            <div>
                <h2>
                <DisplayMusicTable showMusic={this.state.displayMusic} deleteRow={this.makeDeleteRequest}/>
                <SongForm addSong = {this.addNewSong}/>
                </h2>
            
            </div>
         );
    }
}
 
export default App;