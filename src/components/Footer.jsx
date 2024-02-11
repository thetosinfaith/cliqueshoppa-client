import React from 'react';

const title = "Company";
const Resources = "Resources";
const Product = "Product";
const Support = "Contact";

const addressList = [
    {
        text: 'About Us',
    },
    {
        
        text: 'Careers',
    },
    {
        
        text: 'Press',
    },
    {
        
        text: 'Ambassadors',
    },
    {
        
        text: 'Influencer Partner Program',
    },
    {
        
        text: 'Privacy',
    },
    {
        
        text: 'Terms',
    },
];



const ItemList = [
    {
        text: 'Customer Stories',
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
        text: 'Business Education',
        link: '#',
    },
    {
        text: 'Engineering',
        link: '#',
    },
    {
        text: 'Blog',
        link: '#',
    },
    {
        text: 'Help Center',
        link: '#',
    },
];

const quickList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Embed API',
        link: '/about',
    },
    {
        text: 'Forum Circles',
        link: '#',
    },
    {
        text: 'Got a suggestion?',
        link: '/about',
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
            <div className='footer-tp dark-view padding-tb' style={{backgroundColor: 'white', marginLeft: '15px'}}>
                <div className='container'>
                    <div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center' style={{ color: '#082552', fontFamily: 'Outfit, sans-serif', marginTop: '10px' }}>
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

            <div className='footer-bottom' style={{ color: '#082552',  backgroundColor: 'white', marginLeft: '15px' }}>
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
