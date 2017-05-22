import {connect} from 'react-redux'
import Stations from '../components/Stations'

const convertSongsToStations = (songsArray) => {
    const stations = {}
    songsArray.forEach((songObj)=>{
        if(!stations[songObj.genre]){
            stations[songObj.genre] = [songObj]
        } else {
            stations[songObj.genre].push(songObj)
        }
    })
    return stations
}

const mapStateToProps = (state) => {
    //workshop uses state.playlist.songs
    return {
        stations: convertSongsToStations(state.songs)
    };
}

const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps,mapDispatchToProps)(Stations)
