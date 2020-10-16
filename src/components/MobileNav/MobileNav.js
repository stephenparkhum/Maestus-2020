import React from 'react';
import navItems from '../../components/data/NavItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MobileNav = () => {
    const mobileNavItemGeneration = navItems.map(
        (item) => { if(item.active === true && item.mobile === true) {
            return (
                <li key={item.key}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.name}>
                        <button className="mobile--nav-btn"><FontAwesomeIcon icon={item.icon} /> {item.name.toUpperCase()}</button>
                    </a>
                </li>
            )
        }
            })

    return (
        <nav className="mobile--nav">
            {mobileNavItemGeneration}
        </nav>
    )
}

export default MobileNav;