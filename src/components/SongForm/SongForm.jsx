import React, { Component } from 'react';
import './SongForm.css';

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            album: '',
            artist: '',
            release_date: ''
         }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newSong = {
            title: this.state.title,
            album: this.state.album,
            artist: this.state.artist,
            release_date: this.state.release_date
        }
        this.props.addSong(newSong)
    };
    
    render() { 
        return (
            <React.Fragment>
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Title</label>
                <input name="title" onChange={this.handleChange} value = {this.state.title}/>
                <label>Album</label>
                <input name="album" onChange={this.handleChange} value = {this.state.album}/>
                <label>Artist</label>
                <input name="artist" onChange={this.handleChange} value = {this.state.artist}/>
                <label>Release Date</label>
                <input name="release_date" onChange={this.handleChange} value = {this.state.release_date}/>
                <button type="submit">Create Song</button>
            </form>
            </React.Fragment> 
         );
    }
}
 
export default SongForm;