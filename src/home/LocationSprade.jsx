import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const btText = 'Join our Telegram Community';
const desc1 = 'You will be the first to know about the latest updates and take part in our exclusive loyalty programs and giveaways.!';

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
          <h2 className='title' style={{ fontFamily: 'Outfit, sans-serif', fontSize: '38px', marginBottom: '20px', marginTop: '-10px',color: '#690896' }}>
            More Than <CountUp className='check' style={{ color: '#58AA32' }} end={3000} duration={10} separator="," /> Suppliers
          </h2>
          <p style={{ fontFamily: 'Outfit, sans-serif', marginBottom: '20px', color: '082552', fontSize: '16px'}}>{desc1}</p>
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
        <div className='text-center mt-10' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link to='/shop' className='bt me-3' style={{
          borderRadius: '3px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%', 
          maxWidth: '300px', 
          height: '50px',
          backgroundColor: '#690896',
          color: 'white',
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 'normal',
          boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
          border: '5px solid #690896',
          marginTop: '30px'
        }}>
          <span>{btText} <i class="icofont-telegram"> </i></span>
        </Link>
      </div>


        
          </div>
        </div>
     
  );
};

export default LocationSprade;
