import React, {Component} from 'react';
import store from '../store';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

import {connect} from 'react-redux'


// class AlbumContainer extends Component {

//  constructor() {
//     super();
//     this.state = store.getState();
//   }

  // componentDidMount() {

  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  // toggle(song, list) {
  //   store.dispatch(toggleSong(song, list));
  // }

//   render() {
//     return <Album
//       selectedAlbum={this.state.albums.selected}
//       currentSong={this.state.player.currentSong}
//       isPlaying={this.state.player.isPlaying}
//       toggleOne={this.toggle}
//     />;
//   }

// }

// export default AlbumContainer;


 const mapStateToProps = (state, ownProps)=>{
   console.log(ownProps);
  return {
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }

}


const mapDispatchToProps = (dispatch, ownProps) => {
      // console.log("IAMOWN", dispatch);
      // console.log("IAMOWN", ownProps);
    return {
      toggleOne: (song, list)=> dispatch(toggleSong(song, list))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Album);

