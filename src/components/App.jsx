import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayMusicTable from './DisplayMusicTable/DisplayMusicTable';
import SongForm from './SongForm/SongForm';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = { 
            displayMusic: [],
            userInput: ''
        }
    }

    componentDidMount(){
        this.makeGetRequest();
        this.makeDeleteRequest();
        this.addNewSong();
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value 
        })
        console.log(e.target.value)

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


    onChange = e => {
        const { value } = e.target;
        this.setState({
          query: value
        });
    
        this.search(value);
      };


    render() { 
        const userInput = this.state.userInput


        return ( 
            <div>
                <h2>
                
                <SongForm addSong = {this.addNewSong}/>
                <SearchBar thisChange={this.handleChange} onChange={this.onChange} />
                <ul> 
                    {this.state.displayMusic.filter((song) => song.title.toLowerCase() === this.state.userInput.toLowerCase()).map((song) => <li>  {`Title: ${song.title} Artist: ${song.artist} Album: ${song.album} Release Date: ${song.release_date}`} </li>) }
                    {this.state.displayMusic.filter((song) => song.artist.toLowerCase() === this.state.userInput.toLowerCase()).map((song) => <li> {`Title: ${song.title} Artist: ${song.artist} Album: ${song.album} Release Date: ${song.release_date}`} </li>) }
                    {this.state.displayMusic.filter((song) => song.album.toLowerCase() === this.state.userInput.toLowerCase()).map((song) => <li> {`Title: ${song.title} Artist: ${song.artist} Album: ${song.album} Release Date: ${song.release_date}`} </li>) }
                    {this.state.displayMusic.filter((song) => song.release_date.toLowerCase() === this.state.userInput.toLowerCase()).map((song) => <li> {`Title: ${song.title} Artist: ${song.artist} Album: ${song.album} Release Date: ${song.release_date}`} </li>) }
                </ul>
                </h2>
                    <h1 style={{display: 'flex', justifyContent: 'center'}}>
                        <h1>Music Library</h1>
                    </h1>
                    <br>
                    </br>
                <h1> <DisplayMusicTable showMusic={this.state.displayMusic} deleteRow={this.makeDeleteRequest} /> </h1>
            
            </div>
         );
    }
}
 
export default App;