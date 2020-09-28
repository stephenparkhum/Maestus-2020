import React from 'react';
import navItems from '../../components/data/NavItems';


const MobileNav = () => {
    const mobileNavItemGeneration = navItems.map(item => <li key={item.key}><button className="mobile--nav-btn"><a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>{item.name.toUpperCase()}</a></button></li>)

    return (
        <nav className="mobile--nav">
            {mobileNavItemGeneration}
        </nav>
    )
}

export default MobileNav;