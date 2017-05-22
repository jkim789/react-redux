import React from 'react'
import {Link} from 'react-router'

const DUMMY_STATIONS_DATA = [
  { name: '90s Hip Hop' },
  { name: 'Death Metal' },
  { name: 'Classical' }
];

export default function Stations(props) {
    console.log('OUR PROPS ===>>>>',props)
    const stationKeys = Object.keys(props.stations)
    return (
         <div>
            <h3>Stations</h3>
            <div className="list-group">
            {
                stationKeys.map(station => {
                return (
                    <div className="list-group-item" key={station}>
                    <Link to={'fill/me/in/later'}>{station}</Link>
                    </div>
                );
                })
            }
            </div>
        </div>
    )
}

