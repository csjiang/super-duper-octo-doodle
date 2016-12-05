import React from 'react';
import Songs from './Songs';

class SinglePlaylist extends React.Component {

  componentDidMount () {
    const playlistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    selectPlaylist(playlistId);

   }

   componentWillReceiveProps(nextProps){
    if (this.props.routeParams.playlistId !== nextProps.routeParams.playlistId){
      console.log("change", this.props, nextProps);
      this.props.selectPlaylist(nextProps.routeParams.playlistId);
    }
   }

  render () {
    const playlist = this.props.selectedPlaylist;
    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    );
  }
}

export default SinglePlaylist;
