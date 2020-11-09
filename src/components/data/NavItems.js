// FONTAWESOME ICONS
import { faBandcamp, faYoutube, faSpotify, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faList } from '@fortawesome/free-solid-svg-icons'

const navItems = [
    {
        name: `Daybreak's Advent Stream`,
        link: 'https://doomedandstoned.com/post/634332818690932736/maestus',
        icon: faBandcamp,
        active: true,
        desktop: false,
        mobile: true,
        key: 9
    },
    {
        name: 'Bandcamp',
        link: 'https://maestus.bandcamp.com',
        icon: faBandcamp,
        active: true,
        desktop: true,
        mobile: true,
        key: 1
    },
    {
        name: 'Spotify',
        link: 'https://open.spotify.com/artist/4omuwE5Aml9XeCwzs5ggSI?si=EMIvjGDYQpqzqV8NHbDUCA',
        icon: faSpotify,
        active: true,
        desktop: true,
        mobile: true,
        key: 5
    },
    {
        name: "Pre-Save New EP",
        link: 'https://distrokid.com/hyperfollow/maestus/daybreaks-advent',
        icon: faSpotify,
        active: true,
        desktop: false,
        mobile: false,
        key: 7
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
        link: 'https://www.youtube.com/watch?v=Df8tQXIMG58',
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
        desktop: true,
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
        link: 'mailto:contact+web@maest.us',
        icon: faEnvelope,
        active: true,
        mobile: true,
        desktop: true,
        key: 4
    },
]

export default navItems;