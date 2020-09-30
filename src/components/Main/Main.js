import React from 'react';

// Components
import Content from '../Content/Content'
import Navigation from '../Navigation/Navigation'
import MobileNav from '../MobileNav/MobileNav'
import BcPlayer from '../BcPlayer/BcPlayer';

const Main = () => {
    return (
        <div className="main-background">
            <main>
                <MobileNav />
                {/* ADD THIS WHEN YOU WANT TO DISPLAY YT VIDEO <Content /> */}
                <Navigation />
                <BcPlayer />
            </main>
        </div>
    )
}

export default Main;