import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [searchInput, setSearchInput] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    "Zero Capital..",
    "Various Products..",
    "No Investment..",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages]);

  const desc = (
    <>
      <p style={{ textAlign: 'center', fontFamily: 'Avertape, sans-serif', fontSize: '20px', marginBottom: '20px' }}>We provide various products that are ready to sell from different suppliers,</p>
      <p style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '20px' }}>You can start selling these products immediately and make money</p>
    </>
  );

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
      text: "Buy Anything Online",
    },
  ];

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className='banner-section style-4'>
      <div className="container" style={{ marginTop: '-104px', paddingTop: '20px', paddingBottom: '10px' }}>
        <div className='banner-content'>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '900', fontSize: '70px', marginBottom: '90px', marginTop: '20px' }}>
            <div style={{ marginBottom: '50px' }}>
              <span style={{ color: '#690896', display: 'block' }}>Start Your Business with</span>
            </div>
            <div className="animated-text">
              <span style={{ color: 'green', fontWeight: 'bold', display: 'block' }}>{messages[currentMessageIndex]}</span>
            </div>
          </h2>
          {desc}
          <form>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Product..."
              value={searchInput}
              onChange={handleInputChange}
            />
          </form>
          <div className="banner-list">
            {bannerList.map((item, index) => (
              <div key={index} className="banner-item">
                <i className={item.iconName}></i>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
