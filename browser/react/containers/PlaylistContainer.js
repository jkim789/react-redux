import {connect} from 'react-redux';
import React, {Component} from 'react';
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

// class PlaylistContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return (
//       <Playlist
//         {...this.state.player}
//         selectedPlaylist={this.state.playlists.selected}
//         toggleOne={this.toggle}
//       />
//     );
//   }

// }

// export default PlaylistContainer;

const mapStateToProps = (state, ownProps)=>{
  return {
    selectedPlaylist: state.playlists.selected,
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: (song, list) => dispatch(toggleSong(song, list))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
