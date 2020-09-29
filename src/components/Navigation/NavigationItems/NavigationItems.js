import React from 'react';
import Link from 'react-dom';
import navItems from '../../data/NavItems';

const NavigationItems = () => {

    const navItemGeneration = navItems.map(item => <li key={item.key}><a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>{item.name.toUpperCase()}</a></li>)

    return (
        <ul className="nav--list">
            {navItemGeneration}
        </ul>
    )
}

export default NavigationItems;