import React from 'react';

const title = "Company";
const Resources = "Resources";
const Product = "Product";
const Support = "Contact";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'New York, USA.',
    },
    {
        iconName: 'icofont-phone',
        text: '+880 123 456 789',
    },
    {
        iconName: 'icofont-envelope',
        text: 's.com',
    },
];

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
];

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    },
];

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
];

const tweetList = [
    {
        text: 'FAQ',
        link: '#',
    },
    {
        text: 'support@cliqueshoppa.com',
        link: '#',
    },
    {
        text: 'WhatsApp ↗',
        link: '#',
    },
];

const Footer = () => {
    const columnStyle = {
        color: '#082552',
        fontFamily: 'Outfit, sans-serif',
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    };

    const linkStyle = {
        color: '#082552',
        fontFamily: 'Outfit, sans-serif',
        textDecoration: 'none',
    };

    const footerTitleStyle = {
        color: '#082552',
        fontFamily: 'Outfit, sans-serif',
    };

    return (
        <footer className='style-2'>
            <div className='footer-tp dark-view padding-tb' style={{backgroundColor: 'white', marginLeft: '100px'}}>
                <div className='container'>
                    <div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center' style={{ color: '#082552', fontFamily: 'Outfit, sans-serif', marginTop: '8px' }}>
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content" style={{color: '#082552'}}>
                                        <div className="title">
                                            <h4 style={footerTitleStyle}>{title}</h4>
                                        </div>
                                        <div className="content" style={{
                                            color: '#082552',
                                            fontFamily: 'Outfit, sans-serif',
                                            listStyleType: 'none',
                                            padding: 0,
                                            margin: 0,
                                            lineHeight: '2.5',
                                        }}>
                                            <ul style={columnStyle}>
                                                {addressList.map((val, i) => (
                                                    <li key={i}>
                                                        <i className={val.iconName}></i> {val.text}
                                                    </li>
                                                ))}
                                            </ul>
                                            <ul style={columnStyle}>
                                                {socialList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href={val.siteLink}><i className={val.iconName}></i></a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col">
                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4 style={footerTitleStyle}>{Product}</h4>
                                        </div>
                                        <div className="content" style={{
                                            color: '#082552',
                                            fontFamily: 'Outfit, sans-serif',
                                            listStyleType: 'none',
                                            padding: 0,
                                            margin: 0,
                                            lineHeight: '2.5',
                                        }}>
                                            <ul style={columnStyle}>
                                                {quickList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href={val.link} style={linkStyle}>{val.text}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4 style={footerTitleStyle}>{Resources}</h4>
                                        </div>
                                        <div className="content" style={{
                                            color: '#082552',
                                            fontFamily: 'Outfit, sans-serif',
                                            listStyleType: 'none',
                                            padding: 0,
                                            margin: 0,
                                            lineHeight: '2.5',
                                        }}>
                                            <ul style={columnStyle}>
                                                {ItemList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href={val.link} style={linkStyle}>{val.text}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4 style={footerTitleStyle}>{Support}</h4>
                                        </div>
                                        <div className="content" style={{
                                            color: '#082552',
                                            fontFamily: 'Outfit, sans-serif',
                                            listStyleType: 'none',
                                            padding: 0,
                                            margin: 0,
                                            lineHeight: '2.5',
                                        }}>
                                            <ul style={columnStyle}>
                                                {tweetList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href={val.link} style={linkStyle}>{val.text}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='footer-bottom' style={{ color: '#082552', marginRight: '100px', backgroundColor: 'white' }}>
                <div className='container'>
                    <div className='section-wrapper'>
                        <p>&copy; 2024 <a href="/" style={linkStyle}>CliqueShoppa</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
