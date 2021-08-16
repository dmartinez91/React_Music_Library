import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayMusicTable from './DisplayMusicTable/DisplayMusicTable';
import SongForm from './SongForm/SongForm';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayMusic: [],
            songlist: [],
            search: ''   
        }
    }

    componentDidMount(){
        this.makeGetRequest();
        this.makeDeleteRequest();
        this.addNewSong();
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


    searchSong = async(songSearch) => {
        let response = await axios.get(`http://127.0.0.1:8000/music/`, songSearch);
        let newArray = this.state.displayMusic;
        newArray.push(songSearch)
        this.setState({
            displayMusic: songSearch
        })

    };

    render() { 
        const {songlist, search} = this.state
        const filteredSongs = songlist.filter(song => (song.DisplayMusic.toLowerCase().includes(search.toLowerCase())))
        return ( 
            <div>
                <h2>
                <DisplayMusicTable showMusic={this.state.displayMusic} deleteRow={this.makeDeleteRequest}/>
                <SongForm addSong = {this.addNewSong}/>
                <SearchBar placeholder='Search Song' handleChange={(e) => this.setState({search: e.target.value})}/>
                
                </h2>
            
            </div>
         );
    }
}
 
export default App;