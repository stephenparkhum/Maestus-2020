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
        }, 
    ]

    const songData = [
      '3241988708', 
      '440411643', 
      '705618272',
      '3338469584'
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    const getRandomTrack = (songData) => {
        let randomInt = getRandomInt(songData.length - 1);
        let trackSrc = `https://bandcamp.com/EmbeddedPlayer/album=1609786598/size=small/bgcol=333333/linkcol=0f91ff/track=${songData[randomInt]}/transparent=true/`
        return trackSrc;
    }

    return ( 
        <div className="bc--player">
            <iframe title="Maestus Bandcamp Player" style={{border: '0', width: '100%', height: '42px'}} src={getRandomTrack(songData)} seamless><a href="https://maestus.bandcamp.com/album/deliquesce">Deliquesce by Maestus</a></iframe>
        </div>
    )
}

export default BcPlayer;