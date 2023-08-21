import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const btnText = 'Start Your Business Now';
const desc1 = 'Sign Up Today And Get Free Deliveries!';

const clientsList = [
  { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Lekki' },
  { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Gbagada' },
  { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Surulere' },
  { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Yaba' },
  { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Lasu / Ojo' },
  { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Ikeja' },
  { imgUrl: '/src/assets/images/clients/avater.jpg', imgAlt: 'education thumb rajibraj91 rajibraj', text: 'Festac' },
];

const LocationSprade = () => {
  useEffect(() => {
    const clientThumbs = document.querySelectorAll('.client-thumb');

    clientThumbs.forEach((thumb, index) => {
      setTimeout(() => {
        thumb.classList.add('animate-out');
      }, index * 100);
    });
  }, []);

  return (
    <div className='clients-section style-2 padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
          <h2 className='title' style={{ fontFamily: 'Outfit, sans-serif', fontSize: '50px', marginBottom: '20px', color: '#690896' }}>
            More Than <CountUp className='check' style={{ color: '#58AA32' }} end={3000} duration={10} separator="," /> Resellers
          </h2>
          <p style={{ fontFamily: 'Outfit, sans-serif', marginBottom: '20px'}}>{desc1}</p>
        </div>

        <div className='section-wrapper'>
          <div className='clients'>
            {clientsList.map((value, index) => (
              <div key={index} className='client-list'>
                <Link to='/sign-up' className='client-content'>
                  <img src={value.imgUrl} alt={value.imgAlt} />
                  <span>{value.text}</span>
                </Link>
                <div className='client-thumb'>
                  <img src={value.imgUrl} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>

          <div className='container '>
            <div className='section-header text-center' style={{fontFamily: 'Outfit, sans-serif', fontWeight: 'normal'}}>
              <Link to='/sign-up' className='lab-btn mb-4' style={{backgroundColor: '#690896', color: 'white'}}>{btnText}</Link>
              
            </div>
            
        </div>

        
          </div>
        </div>
     
  );
};

export default LocationSprade;
