import React from 'react';

// Components
import Content from '../Content/Content'
import Navigation from '../Navigation/Navigation'
import MobileNav from '../MobileNav/MobileNav'
import Header from '../Header/Header'

const Main = () => {
    return (
        <div className="main-background">
            <main>
                <MobileNav />
                <Navigation />
            </main>
        </div>
    )
}

export default Main;