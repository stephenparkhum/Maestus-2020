import React from 'react';
import './Main.css'

// Components
import Content from '../Content/Content'
import Navigation from '../Navigation/Navigation'

const Main = () => {
    return (
        <main>
            <h1>Main</h1>
            <Content />
            <Navigation />
        </main>
    )
}

export default Main;