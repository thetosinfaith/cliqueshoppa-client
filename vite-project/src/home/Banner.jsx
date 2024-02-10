import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import productData from '../products.json';
import SelectedCategory from '../components/SelectedCategory';

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More than 2000 Merchants",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online On CliqueSHoppa",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filterProduct, setFilterProduct] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handleSearch = e => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // filtering product based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterProduct(filtered);
  };

  const messages = [
    "Digital Products",
    "Sneakers",
    "Perfumes",
    "Jewelries",
    "kitchenwares",
    "Beauty Products",
    "Furnitures",
    "Electronics",
    "Office Supplies"
  ];

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  

  const desc = (
    <>
      <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal', fontSize: '25px'}}>CliqueShoppa is loved by thousands of resellers across Africa</p>
    </>
  );
  

  return (
    <div className='banner-section style-4'>
      <div className="container" style={{ marginTop: '-104px', paddingTop: '50px', paddingBottom: '40px' }}>
        <div className='banner-content'>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '900', fontSize: '70px', marginBottom: '90px', marginTop: '10px' }}>
            <div style={{ marginBottom: '50px' }}>
              <span style={{ color: '#690896', display: 'block', }}>Make Money By Reselling</span>
            </div>
            <div className="animated-text"  style={{ height: '70px', overflow: 'hidden' }}>
              <ReactTyped
                strings={messages.map(message => `<span style="color: #58AA32 ">${message}</span>`)}
                typeSpeed={100}
                loop={true}
                backSpeed={50}
                showCursor={false}
              />
            </div>
          </h2>
          {desc}
          <form>
          <SelectedCategory select={"all" }/>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search a Product..." style={{fontFamily: 'Outfit, sans-serif', fontWeight: 'normal'}}
              value={searchInput}
              onChange={handleSearch}/>
              <button type='submit'><i class="icofont-search-1"></i></button>
          </form>
          <ul className='lab-ul' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal' }}>
            {searchInput && filterProduct.map((product, index) => (
              <li key={index}>
                <Link to={`./shop/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
