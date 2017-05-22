import { connect } from 'react-redux';
import React, {Component} from 'react';
import store from '../store';
import Artist from '../components/Artist';

import {toggleSong} from '../action-creators/player';

// class ArtistContainer extends Component {

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
//       <Artist
//         {...this.state.player}
//         selectedArtist={this.state.artists.selected}
//         toggleOne={this.toggle}
//         children={this.props.children} />
//     );
//   }

// }

// export default ArtistContainer;


const mapStateToProps = (state, ownProps) => {
  console.log("PPPPROPS", ownProps)
  console.log("SSSSTATE", state)
  return {
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList,
    isPlaying: state.player.isPlaying,
    selectedArtist: state.artists.selected,
    children: ownProps.children

  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
      // console.log("IAMOWN", dispatch);
      // console.log("IAMOWN", ownProps);
    return {
      toggleOne: (song, list) => dispatch(toggleSong(song, list))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Artist);

