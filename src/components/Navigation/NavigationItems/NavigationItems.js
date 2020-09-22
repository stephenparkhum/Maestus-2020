import React from 'react';
import Link from 'react-dom'

// CSS
import './NavigationItems.css';

const NavigationItems = () => {
    const navItems = [
        {
            name: 'Bio',
            link: '/bio',
            key: 1
        },
        {
            name: 'Music',
            link: '/music',
            key: 2
        },
        {
            name: 'Live',
            link: '/live',
            key: 3
        },
        {
            name: 'Contact',
            link: '/contact',
            key: 4
        },
    ]

    const navItemGeneration = navItems.map(item => <li key={item.key}><a href={item.link} title={item.name}>{item.name.toUpperCase()}</a></li>)

    return (
        <ul className="nav--list">
            {navItemGeneration}
        </ul>
    )
}

export default NavigationItems;