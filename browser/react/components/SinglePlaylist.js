import React from 'react';
import Songs from './Songs';
import SongSelection from './SongSelection';

class SinglePlaylist extends React.Component {

  componentDidMount () {
    const playlistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    selectPlaylist(playlistId);
   }

   componentWillReceiveProps(nextProps){
    if (this.props.routeParams.playlistId !== nextProps.routeParams.playlistId){
      this.props.selectPlaylist(nextProps.routeParams.playlistId);
    } else if (this.props.selectedPlaylist.songs && nextProps.selectedPlaylist.songs && this.props.selectedPlaylist.songs !== nextProps.selectedPlaylist.songs) {
      this.props.selectPlaylist(nextProps.routeParams.playlistId);
    }
   }

  render () {
    const playlist = this.props.selectedPlaylist;
    return (
      <div>
        <h3>{ playlist.name }</h3>
        <SongSelection selectedPlaylist={playlist} />
        <Songs songs={playlist.songs} currentSong={this.props.currentSong} isPlaying={this.props.isPlaying} toggleOne={this.props.toggleOne} />
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    );
  }
}

export default SinglePlaylist;
