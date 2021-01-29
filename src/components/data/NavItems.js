// FONTAWESOME ICONS
import { faBandcamp, faYoutube, faSpotify, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faList, faCompactDisc } from '@fortawesome/free-solid-svg-icons'

const navItems = [
    {
        name: `Daybreak's Advent`,
        link: 'https://maestus.bandcamp.com/album/daybreaks-advent',
        icon: faBandcamp,
        active: true,
        desktop: true,
        mobile: true,
        key: 9
    },
    {
        name: `Daybreak's Advent (CS)`,
        link: 'https://glossolaliarecords.bandcamp.com/album/daybreaks-advent',
        icon: faBandcamp,
        active: true,
        desktop: true,
        mobile: true,
        key: 1
    },
    {
        name: 'Spotify',
        link: 'https://open.spotify.com/album/3CJkPdj4uvVSqq296Ul2bD?si=WrxaqLovQMmrGhPlTH6QQg',
        icon: faSpotify,
        active: true,
        desktop: true,
        mobile: true,
        key: 5
    },
    {
        name: 'EPK',
        link: 'https://www.sonicbids.com/band/maestus/',
        icon: faCompactDisc,
        active: true,
        desktop: false,
        mobile: true,
        key: 5
    },
    {
        name: 'Instagram',
        link: 'https://instagram.com/maestusofficial',
        icon: faInstagram,
        active: true,
        desktop: true,
        mobile: true,
        key: 2
    },
    {
        name: 'YouTube',
        link: 'https://www.youtube.com/channel/UCX73t3G2y82xKbZ2Jcmr0qg',
        icon: faYoutube,
        active: true,
        desktop: true,
        mobile: true,
        key: 6
    },
    {
        name: 'Facebook',
        link: 'https://facebook.com/maestusdoom',
        icon: faFacebook,
        active: true,
        desktop: false,
        mobile: true,
        key: 8
    },
    {
        name: 'Live',
        link: '/live',
        icon: faList,
        active: false,
        desktop: true,
        mobile: true,
        key: 3
    },
    {
        name: 'Contact',
        link: 'mailto:contact@maest.us',
        icon: faEnvelope,
        active: true,
        mobile: true,
        desktop: true,
        key: 4
    },
]

export default navItems;