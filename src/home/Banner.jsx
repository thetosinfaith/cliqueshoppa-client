import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../products.json';
import 'animate.css/animate.min.css';
import supplierImage from '../assets/images/bg-img/30.jpg';

const messages = [
  { name: "Clothes", color: "#4B0082" },
  { name: "Books", color: "#8A2BE2" },
  { name: "Jewelry", color: "#DAA520" },
  { name: "Laptop", color: "#708090" },
  { name: "Makeup", color: "#FFB6C1" },
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
    <div className="bg-white text-primary-foreground min-h-screen flex flex-col items-center justify-center" style={{ fontFamily: 'Outfit, sans-serif', marginTop: '100px' }}>
      <h1><span className="text-4xl font-bold mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal', color: '#690896', marginBottom: '10px' }}>Make Money</span><br /></h1>
      <div className="banner-messages" style={{ display: 'flex', alignItems: 'center', fontFamily: 'Outfit, sans-serif', marginTop: '20px' }}>
        <h1>
          <span className='text-4xl font-bold' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal', color: '#690896', marginBottom: '10px'}}>Selling</span><br/>
        </h1>
        {messages.map((category, index) => (
          <h1 key={index}>
            <span
              className={`text-4xl font-bold animate__animated ${
                visibleMessageIndex === index ? 'animate__fadeInUp' : 'animate__fadeOut'
              }`}
              style={{
                margin: 'auto',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 'normal',
                color: category.color,
                marginBottom: '10px',
                marginLeft: '15px',
                display: visibleMessageIndex === index ? 'block' : 'none',
              }}
            >
              {category.name}
            </span>
          </h1>
        ))}
      </div>
      <p style={{
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 'normal',
        color: '#000',
        fontSize: '1.20rem',
        marginTop: '20px'
      }}>
        CliqueShoppa is loved by thousands of resellers across Africa
      </p>
      <form style={{ marginBottom: '0px', display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search product..."
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 'normal',
            width: '100%',
            padding: '10px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginTop: '20px'
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
          cursor: 'pointer',
          borderRadius: '5px',
          marginTop: '20px'
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
  );
};

const Home = () => {
  return (
    <section className='register' style={{ paddingTop: '70px' }}>
      <div className='container'>
        <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
          {/* Image on the left */}
          <div className='col order-lg-1 order-2'>
            <div className='section-header' style={{ maxHeight: '500px', overflow: 'hidden', marginTop: '70px', borderRadius: '5px' }}>
              <img src={supplierImage} alt="Supplier" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
          {/* Banner component on the right */}
          <div className='col order-lg-2 order-1 banner-container' style={{ paddingBottom: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Banner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
