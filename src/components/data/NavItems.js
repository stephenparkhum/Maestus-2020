// FONTAWESOME ICONS
import { faBandcamp, faYoutube, faSpotify, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faList } from '@fortawesome/free-solid-svg-icons'

const navItems = [
    {
        name: 'Bandcamp',
        link: 'https://maestus.bandcamp.com',
        icon: faBandcamp,
        active: true,
        key: 1
    },
    {
        name: 'Spotify',
        link: 'https://open.spotify.com/artist/4omuwE5Aml9XeCwzs5ggSI?si=EMIvjGDYQpqzqV8NHbDUCA',
        icon: faSpotify,
        active: true,
        key: 5
    },
    {
        name: "Pre-Save New EP",
        link: 'https://distrokid.com/hyperfollow/maestus/daybreaks-advent',
        icon: faSpotify,
        active: true,
        key: 7
    },
    {
        name: 'Instagram',
        link: 'https://instagram.com/maestusofficial',
        icon: faInstagram,
        active: true,
        key: 2
    },
    {
        name: 'YouTube',
        link: 'https://www.youtube.com/watch?v=Df8tQXIMG58',
        icon: faYoutube,
        active: true,
        key: 6
    },
    {
        name: 'Facebook',
        link: 'https://facebook.com/maestusdoom',
        icon: faFacebook,
        active: true,
        key: 8
    },
    {
        name: 'Live',
        link: '/live',
        icon: faList,
        active: false,
        key: 3
    },
    {
        name: 'Contact',
        link: 'mailto:contact+web@maest.us',
        icon: faEnvelope,
        active: true,
        key: 4
    },
]

export default navItems;