import React from 'react'

const BcPlayer = () => {
    return ( 
        <div className="bc--player">
            <iframe title="Maestus Bandcamp Player" style={{border: '0', width: '100%', height: '42px'}} src="https://bandcamp.com/EmbeddedPlayer/album=1609786598/size=small/bgcol=333333/linkcol=0f91ff/track=440411643/transparent=true/" seamless><a href="https://maestus.bandcamp.com/album/deliquesce">Deliquesce by Maestus</a></iframe>
        </div>
    )
}

export default BcPlayer;