// import StationsContainers from './StationsContainers';
import { connect } from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils';
import { toggleSong } from '../action-creators/player';

// const DUMMY_CURRENT_SONG = {};
// const DUMMY_IS_PLAYING = false;
// const DUMMY_TOGGLE_ONE = function () {};



const mapStateToProps = (state, ownProps) => {
  // console.log("IamSTATE", state);
    const currentStation = ownProps.params.stationName;
    const songs = state.songs.filter(song => {
      return song.genre === currentStation;
    }).map(convertSong);

    return {
      stationName: currentStation,
      songs: songs,
      isPlaying: state.player.isPlaying,
      currentSong: state.player.currentSong
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
      // console.log("IAMOWN", dispatch);
      // console.log("IAMOWN", ownProps);
    return {
      toggleOne: (song, list)=> dispatch(toggleSong(song, list))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Station);
