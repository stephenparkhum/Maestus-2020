import React from 'react';
import Link from 'react-dom'

const NavigationItems = () => {
    const navItems = [
        {
            name: 'Music',
            link: 'https://maestus.bandcamp.com',
            key: 1
        },
        {
            name: 'Instagram',
            link: 'https://instagram.com/maestusofficial',
            key: 2
        },
        {
            name: 'Facebook',
            link: 'https://facebook.com/maestusdoom',
            key: 2
        },
        {
            name: 'Live',
            link: '/live',
            key: 3
        },
        {
            name: 'Contact',
            link: 'mailto:maestus.pnw@gmail.com',
            key: 4
        },
    ]

    const navItemGeneration = navItems.map(item => <li key={item.key}><a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>{item.name.toUpperCase()}</a></li>)

    return (
        <ul className="nav--list">
            {navItemGeneration}
        </ul>
    )
}

export default NavigationItems;