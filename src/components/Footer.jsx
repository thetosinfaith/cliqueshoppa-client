import React from 'react';

const title1 = <img src="" alt="" />;
const title = "Company";
const desc = "CliqueShoppa offers their clients a way to start their own business with zero capital by providing a range of ready-to-sell products sourced from multiple suppliers.";
const Resources = "Resources";
const Product = "Product";
const Support = "Support";

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
        text: 'info@shopcart.com',
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
        text: 'support@cliqueshoppa.com ',
        link: '#',
    },
    {
        text: 'WhatsApp ↗',
        link: '#',
    },
];

const Footer = () => {
    return (
        <footer className='syle-2'>
            <div className='footer-top dark-view padding-tb'>
                <div className='container'>
                    <div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center' style={{ color: '#082552', fontFamily: 'Outfit, sans-serif' }}>
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4 style={{ color: '#082552', fontFamily: 'Outfit, sans-serif'}}>{title}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className='ul' style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                                {addressList.map((val, i) => (
                                                    <li key={i}>
                                                        <i className={val.iconName}></i> {val.text}
                                                    </li>
                                                ))}
                                            </ul>
                                            <ul className='ul' style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
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
                                        <div className="title" style={{ color: '#082552', fontFamily: 'Outfit, sans-serif' }}>
                                            <h4 style={{ color: '#082552', fontFamily: 'Outfit, sans-serif' }}>{Product}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className='ul' style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                                {quickList.map((val, i) => (
                                                    <li key={i} style={{ color: '#082552', fontFamily: 'Outfit, sans-serif'}}>
                                                        <a href={val.link} style={{ color: '#082552', fontFamily: 'Outfit, sans-serif'}}>{val.text}</a>
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
                                        <div className="title" style={{ color: '#082552', fontFamily: 'Outfit, sans-serif'}}>
                                            <h4 style={{ color: '#082552', fontFamily: 'Outfit, sans-serif'}}>{Resources}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className='ul' style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                                {ItemList.map((val, i) => (
                                                    <li key={i} style={{ color: '#082552' }}>
                                                        <a href={val.link} style={{ color: '#082552', fontFamily: 'Outfit, sans-serif' }}>{val.text}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col" style={{ color: '#082552' }}>
                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4 style={{ color: '#082552'}}>{Support}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className='ul' style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                                {tweetList.map((val, i) => (
                                                    <li key={i} style={{ color: '#082552' }}>
                                                        <a href={val.link} style={{ color: '#082552' }}>{val.text}</a>
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

            <div className='footer-bottom' style={{ color: '#082552', marginRight: '100px' }}>
                <div className='container'>
                    <div className='section-wrapper'>
                        <p>&copy; 2024 <a href="/">Shop Cart</a>. Designed by <a href="/">XYZ</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
