import React from 'react';
import navItems from '../../components/data/NavItems';


const MobileNav = () => {
    const mobileNavItemGeneration = navItems.map(item => <li key={item.key}><a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}><button className="mobile--nav-btn">{item.name.toUpperCase()}</button></a></li>)

    return (
        <nav className="mobile--nav">
            {mobileNavItemGeneration}
        </nav>
    )
}

export default MobileNav;