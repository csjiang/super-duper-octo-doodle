import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component {

  constructor (props) {
      super(props);
      this.state = {
        value: '',
        disabled: true
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value},() =>{
          const val = this.state.value;
          if (val.length > 16) this.setState({disabled: true});
          else this.setState({disabled: false});
        });
    }

    handleSubmit(event){
      this.setState({value:''});
      event.preventDefault();
    }

    render () {
      return (
        <div>
          <NewPlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value} disabled={this.state.disabled} />
        </div>
      );
    }
}
