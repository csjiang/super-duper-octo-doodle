import React, { Component } from 'react';
import axios from 'axios';
import Songs from './Songs';
import SongSelection from './SongSelection';

export default class SongSelectionContainer extends Component {

  constructor (props) {
      super(props);
      this.state = {
        value: '',
        songs: [],
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event){
      console.log(this.state.value);
        axios.post(`/api/playlists/${this.props.selectedPlaylist.id}/songs`, {id: this.state.value})
        .then(r => r.data)
        .then(song => {
            console.log(song);
            console.log(this.props.selectedPlaylist);
            this.setState({value:''});
        })
        event.preventDefault();
    }

    componentDidMount () {
      axios.get('/api/songs/')
        .then(r => r.data)
        .then(songs => {
          this.setState({ songs });
        })
      }

    render() {
      return (
        <div className="well">
          <form className="form-horizontal" noValidate name="songSelect" onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Add to Playlist</legend>
              <div className="form-group">
                <label htmlFor="song" className="col-xs-2 control-label">Song</label>
                <div className="col-xs-10">
                  <select value={this.state.value} onChange={this.handleChange} className="form-control" name="song">
                    {
                      this.state.songs.map(song => {
                      return (
                        <option key={song.id} value={song.id}>{song.name}</option>
                      );
                    })
                    }
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                  <button type="submit" className="btn btn-success">Add Song</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
    );
  }
}