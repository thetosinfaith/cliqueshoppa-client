import React from 'react';
import { Link } from 'react-router-dom';

const subTitle = "resellers make an average of #50,000 monthly";
const title = "5000+ Products to Resell";
const btText = "Join the Waitlist";

const categoryList = [
  {
    imgUrl: 'src/assets/images/category/01.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-cart',
    title: 'Shoes',
  },
  {
    imgUrl: 'src/assets/images/category/02.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-cart',
    title: 'Bags',
  },
  {
    imgUrl: 'src/assets/images/category/03.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-cart',
    title: 'Home Decor',
  },
  {
    imgUrl: 'src/assets/images/category/04.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-cart',
    title: 'Fashion',
  },
  {
    imgUrl: 'src/assets/images/category/05.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-cart',
    title: 'Beauty Care',
  },
  {
    imgUrl: 'src/assets/images/category/06.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-cart',
    title: 'Kitchenware',
  },
]

const HomeCategory = () => {
  return (
    <div className='category-section style-4 padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
          <span className='subtitle' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'regular', fontSize: '15.5px', color: 'black', marginTop: '4px', letterSpacing: '1px'}}>{subTitle}</span>
          <h2 className='title' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', color: '#690896', marginTop: '20px', fontSize: '1.8rem'}}>{title}</h2>
        </div>

        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
            {
              categoryList.map((vol, i) => (
                <div key={i} className='col'>
                  <Link to='/shop' className='category-item'>
                    <div className='category-inner tinted-background' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal', color: 'white', fontSize: '25px', textAlign: 'center' }}>

                      {/* Image thumbnails */}
                      <div className='category-thumbnail' style={{ marginBottom: '15px' }}>
                        <img src={vol.imgUrl} alt={vol.imgAlt} style={{ maxWidth: '100%', borderRadius: '10px', width: '100%', height: '300px', objectFit: 'cover' }} />
                      </div>

                      <div className='category-content'>
                        <div className='category-icon' style={{ marginRight: '8px' }}>
                          <i className={vol.iconName}></i>
                        </div>
                        <Link to='/shop'>
                          <h6 style={{ color: 'white'}}>{vol.title}</h6>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>

          <div className='text-center mt-5' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link to='/shop' className='bt me-3' style={{
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '170px',
            height: '50px',
            backgroundColor: '#690896',
            color: 'white',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 'normal',
            boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
            border: '5px solid #690896'
          }}>
            <span >{btText} <i class="icofont-sign-in"></i></span>
          </Link>
        </div>

        </div>
      </div>
    </div>
  )
}

export default HomeCategory;
