import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productData from '../products.json';
import 'animate.css/animate.min.css';
import supplierImage from '../assets/images/bg-img/23.jpg';

const messages = [
  { name: "Clothes", color: "#FF69B4" },
  { name: "Makeup", color: "#FF1493" },
  { name: "Phones", color: "#9B59B6" },
  { name: "Shoes", color: "#4682B4" },

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
    <div className="banner-sectio" style={{ backgroundColor: '#fff', padding: '20px', marginTop: '-50px'}}>
      <div className="container mx-auto">
        <div className="banner-content text-center" style={{ marginBottom: '100px' }}>
          <h2 className="text-4xl md:text-6xl mb-8" style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontWeight: 'bold', 
              color: '#690896',
              fontSize: '4.5rem',  // Default font size for desktop
              margin: '0',
              padding: '0',
              '@media (max-width: 768px)': {
                fontSize: '2.5rem'  // Font size for tablets
              },
              '@media (max-width: 480px)': {
                fontSize: '2rem'  // Font size for mobile
              }
            }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70%', marginTop: '120px' }}>
              <span className="text-purple-700" style={{ fontSize: '48px', marginRight: '10px', marginBottom: '20px' }}>Sell</span>
              <div className="h-10" style={{ display: 'flex', alignItems: 'center', fontSize: '48px', marginBottom: '20px' }}>
                {messages.map((category, index) => (
                  <span
                    key={index}
                    className={`animate__animated ${visibleMessageIndex === index ? 'animate__fadeInUp' : 'animate__fadeOut'}`}
                    style={{ 
                      color: category.color,
                      display: visibleMessageIndex === index ? 'block' : 'none',
                      fontSize: '3.2rem',
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
          <h2 className="text-4xl md:text-6xl mb-8" style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontWeight: 'bold', 
              color: '#690896',
              fontSize: '3rem', 
              margin: '0',
              padding: '0',
              marginBottom: '20px'
            }}>
            Make Money
          </h2>
          <p style={{ 
              fontFamily: 'Outfit, sans-serif', 
              fontWeight: 'normal', 
              color: '#000',
              fontSize: '1.20rem', 
              marginBottom: '20px'
            }}>
            CliqueShoppa is loved by thousands of resellers across Africa
          </p>
          <form style={{ marginBottom: '20px', marginBottom: '-100px', display: 'flex', alignItems: 'center' }}>
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
      </div>
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
