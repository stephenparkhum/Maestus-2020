import React from 'react'

const BcPlayer = () => {
    const albumData = [
        {
          'name': 'Deliquesce', 
          'machine_name': 'deliquesce', 
          'id': '1609786598',
          'tracks': [
            '3241988708', 
            '440411643', 
            '705618272',
            '3338469584'
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

    const albumMachineName = `https://maestus.bandcamp.com/album/${albumData[0].machine_name}`

    return ( 
        <div className="bc--player">
            <iframe title="Maestus Bandcamp Player" style={{border: '0', width: '100%', height: '42px'}} src={getRandomTrack(albumData)} seamless><a href={albumMachineName}>{albumData[0].name} by Maestus</a></iframe>
        </div>
    )
}

export default BcPlayer;