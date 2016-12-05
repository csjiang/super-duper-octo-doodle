//composes filterinput and artists together by managing state of input form and filtering list of artists passed to artists
import React, { Component } from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistsContainer extends Component {

	constructor (props) {
    	super(props);
    	this.state = {
    		value: '',
    		artists: [],
    	};

    	this.handleChange = this.handleChange.bind(this);
    	// this.handleSubmit = this.handleSubmit.bind(this);
    	this.filterArtists = this.filterArtists.bind(this);
    }

    handleChange(event) {
    	this.setState({value: event.target.value});
    }

    filterArtists(artists) {
    	return artists.filter(artist => {
    		return artist.name.toLowerCase().includes(this.state.value.toLowerCase()); //refactor at some point with match 
    	});
    }

    render () {
    	return (
    		<div>
	    		<FilterInput handleChange={this.handleChange} handleSubmit={this.handleSubmit} value={this.state.value} /> 
	    		<Artists artists={this.filterArtists(this.props.artists)}/>
	    	</div>
    	);
    }
}