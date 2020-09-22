import React from 'react';

// Components
import SpotifyComponent from './SpotifyComponent/SpotifyComponent'
import NavigationItems from './NavigationItems/NavigationItems'

const Navigation = () => {
    return (
        <nav>
            <NavigationItems />
            {/* <SpotifyComponent /> */}
        </nav>
    )
}

export default Navigation;