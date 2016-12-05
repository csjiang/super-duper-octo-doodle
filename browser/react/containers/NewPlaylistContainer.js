import React, { Component } from 'react';

import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends Component {

  constructor (props) {
      super(props);
      this.state = {
        value: '',
        tooLong: false,
        tooShort: false,
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value}, () =>{
          const val = this.state.value;
          if (val.length === 0) this.setState({tooShort: true})
          else if (val.length > 16) this.setState({tooLong: true})
          else this.setState({tooLong: false, tooShort: false});
        });
    }

    handleSubmit(event){
      this.props.createPlaylist(this.state.value);
      this.setState({value:''});
      event.preventDefault();
    }

    render () {
      return (
        <div>
          <NewPlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value} tooLong={this.state.tooLong} tooShort={this.state.tooShort} />
        </div>
      );
    }
}
