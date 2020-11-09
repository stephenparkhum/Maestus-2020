import React from 'react'

const BcPlayer = () => {
    const albumData = [
        {
          'name': 'Daybreaks Advent', 
          'machine_name': 'daybreaks-advent', 
          'id': '2278345818',
          'tracks': [
            '1236276314', 
            '616080703'
          ]
        }
    ]

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    const getRandomTrack = (albumData) => {
        let albumId = albumData[0].id;
        let tracks = albumData[0]['tracks'];
        let randomInt = getRandomInt(tracks.length - 1);
        let trackSrc = `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=small/bgcol=333333/linkcol=0f91ff/track=${tracks[randomInt]}/transparent=true/`
        return trackSrc;
    }

    const albumMachineName = `https://glossolaliarecords.bandcamp.com/album/${albumData[0].machine_name}`

    return ( 
        <div className="bc--player">
            <iframe title="Maestus Bandcamp Player" style={{border: '0', width: '100%', height: '42px'}} src={getRandomTrack(albumData)} seamless><a href={albumMachineName}>{albumData[0].name} by Maestus</a></iframe>
        </div>
    )
}

export default BcPlayer;