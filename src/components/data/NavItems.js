import React from 'react'

// FONTAWESOME ICONS
import { faBandcamp, faSpotify, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faList } from '@fortawesome/free-solid-svg-icons'

const navItems = [
    {
        name: 'Bandcamp',
        link: 'https://maestus.bandcamp.com',
        icon: faBandcamp,
        key: 1
    },
    {
        name: 'Spotify',
        link: 'https://open.spotify.com/artist/4omuwE5Aml9XeCwzs5ggSI?si=EMIvjGDYQpqzqV8NHbDUCA',
        icon: faSpotify,
        key: 5
    },
    {
        name: 'Instagram',
        link: 'https://instagram.com/maestusofficial',
        icon: faInstagram,
        key: 2
    },
    {
        name: 'Facebook',
        link: 'https://facebook.com/maestusdoom',
        icon: faFacebook,
        key: 2
    },
    {
        name: 'Live',
        link: '/live',
        icon: faList,
        key: 3
    },
    {
        name: 'Contact',
        link: 'mailto:maestus.pnw@gmail.com',
        icon: faEnvelope,
        key: 4
    },
]

export default navItems;