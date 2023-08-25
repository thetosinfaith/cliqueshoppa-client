import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../products.json';
import 'animate.css/animate.min.css';
import supplierImage from '../assets/images/bg-img/23.jpg';

const messages = [
  { name: "Bags", color: "#FF69B4" },
  { name: "Shoes", color: "#3498DB" },
  { name: "Books", color: "#E74C3C" },
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
    <div className="banner-content text-center" style={{backgroundColor: '#fff', padding: '10px', marginTop: '-20px'}}>
  <h2 className="text-4xl md:text-6xl mb-8" style={{ 
      fontFamily: 'Outfit, sans-serif', 
      fontWeight: 'bold', 
      color: '#690896',
      fontSize: '4.0rem',  // Default font size for desktop
      margin: '0',
      padding: '0',
      '@media (max-width: 768px)': {
        fontSize: '2.5rem'  // Font size for tablets
      },
      '@media (max-width: 350px)': {
        fontSize: '1.5rem'  // Font size for mobile
      }
    }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '70%', marginTop: '120px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <span className="text-purple-700" style={{ fontSize: '45px', marginRight: '10px', marginBottom: '20px' }}>Make Money</span>
        <span style={{ fontSize: '2.8rem', color: '#000', marginLeft: '10px' }}></span>
      </div>
      <div className="h-10" style={{ display: 'flex', alignItems: 'center', marginTop: '-20px'}}>
        <span style={{ fontSize: '2.8rem', marginRight: '10px', color: '690896'}}>Selling</span>
        {messages.map((category, index) => (
          <span
            key={index}
            className={`animate__animated ${visibleMessageIndex === index ? 'animate__fadeInUp' : 'animate__fadeOut'}`}
            style={{ 
              color: category.color,
              display: visibleMessageIndex === index ? 'block' : 'none',
              fontSize: '3.0rem',
              margin: '0',
              padding: '0'
            }}
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  </h2>
          <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontWeight: 'normal', 
              color: '#000',
              fontSize: '1.20rem', 
              marginTop: '50px'
            }}>
            CliqueShoppa is loved by thousands of resellers across Africa
          </p>
          <form style={{ marginBottom: '-0px', display: 'flex', alignItems: 'center' }}>
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
                marginTop: '40px'
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
              marginTop: '40px'
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
          <div className='section-header' style={{ maxHeight: '500px', overflow: 'hidden', marginTop: '70px', borderRadius: '5px'}}>
  <img src={supplierImage} alt="Supplier" style={{ width: '100%', height: 'auto' }} />
</div>

          </div>
          
          {/* Banner component on the right */}
          <div className='col order-lg-2 order-1' style={{ paddingBottom: '60px' }}>
            <Banner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
