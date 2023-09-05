import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../products.json';
import SelectedCategory from '../components/SelectedCategory';
import 'animate.css/animate.min.css';

const messages = [
  { name: "Fashion", color: "#FF69B4" },
  { name: "Perfume", color: "#FF6347" },
  { name: "Jewelries", color: "#4682B4" },
  { name: "Makeup", color: "#FF1493" },
  { name: "Furniture", color: "#FF6F61" },
  { name: "Electronics", color: "#9B59B6" },
  { name: "Bedding", color: "#2ECC71" }
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filterProduct, setFilterProduct] = useState([]);
  const [visibleMessageIndex, setVisibleMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterProduct(filtered);
  };

  return (
    <div className="banner-section">
      <div className="container mx-auto">
        <div className="banner-content text-center">
          <h2 className="text-4xl md:text-6xl mb-8" style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontWeight: 'bold', 
            color: '#690896',
            fontSize: '3.5rem', 
            margin: '0',
            padding: '0'
          }}>
            <span className="text-purple-700">Start Your</span>
            <div className="h-10">
              {messages.map((category, index) => (
                <span
                  key={index}
                  className={`animate__animated ${visibleMessageIndex === index ? 'animate__fadeInUp' : 'animate__fadeOut'}`}
                  style={{ 
                    color: category.color,
                    display: visibleMessageIndex === index ? 'block' : 'none',
                    fontSize: '3.5rem', // Font size for smaller screens
                    margin: '0',
                    padding: '0'
                  }}
                >
                  {category.name}
                </span>
              ))}
            </div>
          </h2>
          <h2 className="text-4xl md:text-6xl mb-8" style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontWeight: 'bold', 
            color: '#690896',
            fontSize: '3rem', // Default font size
            margin: '0',
            padding: '0'
          }}>
            <span className="text-purple-700">Business in Minutes</span>
          </h2>
          <p className="text-lg md:text-xl mb-8" style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontWeight: 'normal', 
            color: '#000',
            fontSize: '1.25rem' // Default font size
          }}>
            CliqueShoppa is loved by thousands of resellers across Africa
          </p>
          <form style={{ marginBottom: '20px' }}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Find Product for Resale..."
              style={{ 
                fontFamily: 'Outfit, sans-serif', 
                fontWeight: 'normal', 
                width: '100%', // Input width
                padding: '10px',
                marginBottom: '10px'
              }}
              value={searchInput}
              onChange={handleSearch}
            />
            <button type='submit' style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontWeight: 'normal', 
              background: '#690896',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer'
            }}>
              <i className="icofont-search-1"></i>
            </button>
          </form>
          <ul className='ul' style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontWeight: 'normal',
            listStyleType: 'none',
            padding: '0'
          }}>
            {searchInput && filterProduct.map((product, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <Link to={`./shop/${product.id}`} style={{ 
                  fontFamily: 'Outfit, sans-serif', 
                  fontWeight: 'normal',
                  textDecoration: 'none',
                  color: '#690896'
                }}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
