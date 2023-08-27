import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../products.json';
import SelectedCategory from '../components/SelectedCategory';
import 'animate.css/animate.min.css'; // Import animate.css styles

const messages = [
{ name: "Fashion", color: "#FF69B4" },        // Pink
{ name: "Perfume", color: "#FF6347" },       // Tomato
{ name: "Jewelries", color: "#4682B4" },      // Steel Blue
{ name: "Makeup", color: "#FF1493" },         // Deep Pink
{ name: "Furniture", color: "#FF6F61" },     // Tangerine
{ name: "Electronics", color: "#9B59B6" },    // Blue Violet
{ name: "Bedding", color: "#2ECC71" }         // Medium Sea Green

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

    // Filtering product based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterProduct(filtered);
  };

  
  const desc = (
    <>
      <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal', fontSize: '25px'}}>CliqueShoppa is loved by thousands of resellers across Africa</p>
    </>
  );
  
  return (
    <div className='banner-section style-4'>
      <div className="container" style={{ marginTop: '-104px', paddingTop: '10px', paddingBottom: '40px' }}>
        <div className='banner-content'>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '900', fontSize: '70px', marginBottom: '50px', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#690896', display: 'block', marginRight: '20px', marginLeft: '100px' }}>Start Your</span>
            <div style={{ height: '50px' }}>
            {messages.map((category, index) => (
  <span
    key={index}
    className={`animate__animated ${visibleMessageIndex === index ? 'animate__fadeInUp' : 'animate__fadeOut'}`}
    style={{ color: category.color, display: visibleMessageIndex === index ? 'block' : 'none' }}
  >
    {category.name}
  </span>
))}
            </div>
          </h2>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '900', fontSize: '70px', marginBottom: '50px', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#690896', display: 'block', marginRight: '20px', marginLeft: '100px' }}>Business in Minutes</span>
          </h2>
          {desc}
          <form>
            <SelectedCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Find a product to sell..."
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal' }}
              value={searchInput}
              onChange={handleSearch}
            />
            <button type='submit'><i className="icofont-search-1"></i></button>
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
};

export default Banner;
