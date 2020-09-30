import React from 'react';
import siteData from '../data/SiteData'

// Helmet Elements 
import {Helmet} from "react-helmet";

const HelmetData = () => {
    return (
        <Helmet>
            <meta charSet={siteData.char_set} />
            <meta name="description" content={siteData.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={siteData.link_href} />

            {/* Social/FB Elemenets */}
            <meta name="og:type" content={siteData.type} />
            <meta name="og:title" content={siteData.title} />
            <meta name="og:description" content={siteData.og_description} />
            <meta name="og:url" content={siteData.url} />
            <meta name="og:site_name" content={siteData.name} />
            <meta name="og:image" content={siteData.og_img} />
            <meta name="og:image:secure_url" content={siteData.og_img_secure} />
            <meta name="og:image:width" content={siteData.og_img_width} />
            <meta name="og:image:height" content={siteData.og_img_height} />
            <meta name="og:image:alt" content={siteData.og_img_alt} />

            {/* Twitter Elements */}
            <meta name="twitter:card" content={siteData.twitter.card} />
            <meta name="twitter:description" content={siteData.twitter.description} />
            <meta name="twitter:title" content={siteData.twitter.title} />
            <meta name="twitter:site" content={siteData.twitter.site} />
            <meta name="twitter:image" content={siteData.twitter.img} />
            <meta name="twitter:creator" content={siteData.twitter.creator} />
        </Helmet>
    )
}

export default HelmetData;