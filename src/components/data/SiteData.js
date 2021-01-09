const siteData = {
    char_set: 'utf-8',
    type: 'website',
    title: 'Maestus | Official Site',
    name: 'Maestus - Official Site',
    description: `Maestus - DAYBREAK'S ADVENT available now on Glossolalia Records`,
    photo: '',
    link_href: 'https://maest.us',
    local: 'en_US', 
    og_img: '',
    og_img_width: '',
    og_img_height: '',
    og_img_alt: 'official-maestus-site-Logo',
    site_name: 'Maestus',
    twitter: {
        card: 'summary',
        site: '@maestusdoom'
    }
}

// Data/Social Media Updates
siteData.og_description = siteData.description;
siteData.og_img_secure = siteData.og_img;

// Twitter data updates
siteData.twitter.description = siteData.description;
siteData.twitter.title = siteData.title;
siteData.twitter.img = siteData.og_img;
siteData.twitter.creator = siteData.twitter.site;

export default siteData;