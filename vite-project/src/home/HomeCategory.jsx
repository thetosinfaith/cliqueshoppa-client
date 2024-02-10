import React from 'react'
import { Link } from 'react-router-dom';

const subTitle  = "Choose Any Products";
const title = "At Wholesale Prices";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: 'src/assets/images/category/01.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-ui-cart',
    title: 'Shoes',
  },
  {
    imgUrl: 'src/assets/images/category/02.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-ui-cart',
    title: 'Bags',
  },
  {
    imgUrl: 'src/assets/images/category/03.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-ui-cart',
    title: 'Home Decor',
  },
  {
    imgUrl: 'src/assets/images/category/04.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-ui-cart',
    title: 'Fashion',
  },
  {
    imgUrl: 'src/assets/images/category/05.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-ui-cart',
    title: 'Beauty Care',
  },
  {
    imgUrl: 'src/assets/images/category/06.jpg',
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-ui-cart',
    title: 'Kitchenware',
  },
]

const HomeCategory = () => {
  return (
    <div className='category-section style-4 padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
          <span className='subtitle' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal', color: '#58AA32'}}>{subTitle}</span>
          <h2 className='title' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', color: '#690896', marginTop: '20px', fontSize: '50px'}}>{title}</h2>
        </div>

        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
            {
              categoryList.map((vol, i) => (
                <div key={i} className='col'>
                  <Link to='/shop' className='category-item'>
                    <div className='category-inner tinted-background'  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal', color: 'white', fontSize: '25px'}}>

                      {/* Image thumbnails */}
                      <div className='category-thumbnail'>
                        <img src={vol.imgUrl} alt={vol.imgAlt} style={{maxWidth: '100%',  borderRadius: '10px', width: '100%', height: '100%', objectFit: 'cover'}}/>
                      </div>

                      <div className='category-content'>
                        <div className='category-icon' style={{ marginRight: '8px' }}>
                          <i className={vol.iconName}></i>
                        </div>
                        <Link to='/shop'>
                          <h6>{vol.title}</h6>
                        </Link>
                      </div>

                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCategory
