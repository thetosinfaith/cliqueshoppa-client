import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const title = 'Hot Niches 💰';

const ProductData = [
  {
    imgUrl: 'src/assets/images/categoryTab/01.jpg',
    cate: 'Ring Lights & Mobile Flashes',
    title: '13-inch Ring Light + 210CM Tripod',
    brandImg: 'assets/images/course/author/01.jpg',
    brand: 'Neewer',
    price: '₦ 15,000',
    id: 1,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/02.jpg',
    cate: 'Baby Products',
    title: 'Bebem Natural Essences Maxi Diaper',
    brandImg: 'assets/images/course/author/02.jpg',
    brand: 'Bebem',
    price: '₦ 1,097',
    id: 2,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/03.jpg',
    cate: 'Phones & Tablets',
    title: 'C Idea 8 Inches Android 12 Tablet',
    brandImg: 'assets/images/course/author/03.jpg',
    brand: 'C Idea',
    price: '₦ 68,160',
    id: 3,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/04.jpg',
    cate: 'Beauty Care',
    title: 'Micolor Palette With Blush, & Bronzer',
    brandImg: 'assets/images/course/author/04.jpg',
    brand: 'Micolor',
    price: '₦ 3,890',
    id: 4,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/05.jpg',
    cate: 'Fashion & Watches',
    title: 'Leather Strap Big Face Watch',
    brandImg: 'assets/images/course/author/05.jpg',
    brand: 'Lange & Söhne',
    price: '₦ 5,200',
    id: 5,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/06.jpg',
    cate: 'Beauty Care',
    title: 'Cerave Lotion & Facial Cleanser',
    brandImg: 'assets/images/course/author/06.jpg',
    brand: 'Cerave',
    price: '₦ 8,700',
    id: 6,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/07.jpg',
    cate: 'Shoes & Slippers',
    title: 'Men Sandals Flip-Flop',
    brandImg: 'assets/images/course/author/01.jpg',
    brand: 'Tijo and Bibs',
    price: '₦ 14,500',
    id: 7,
  },
  {
    imgUrl: 'src/assets/images/categoryTab/08.jpg',
    cate: 'Home Appliances',
    title: 'Binatone 1.7 Litres Electric Kettle',
    brandImg: 'assets/images/course/author/02.jpg',
    brand: 'Binatone',
    price: '₦ 21,599',
    id: 8,
  },
];

const CategoryShowcase = () => {
  const [items, setItems] = useState(ProductData);

  const filterItem = (category) => {
    if (category === 'All') {
      setItems(ProductData);
    } else {
      const updatedItems = ProductData.filter((item) => item.cate.includes(category));
      setItems(updatedItems);
    }
  };

  return (
    <div className='course-section style-3 padding-tb'>
      <div className='course-shape one'>
        <img src='/src/assets/images/shape-img/icon/01.png' alt='' />
      </div>
      <div className='course-shape two'>
        <img src='/src/assets/images/shape-img/icon/01.png' alt='' />
      </div>

      <div className='container'>
        <div className='section-header'>
          <h2 className='title' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'light', color: '#690896' }}>
            {title}
          </h2>
          <div className='course-filter-group' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal' }}>
            <ul className='lab-ul'>
              <li onClick={() => filterItem('All')} style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', color: '#690896' }}>
                All
              </li>
              <li onClick={() => filterItem('Ring Lights')} style={{ fontFamily: 'Outfit, sans-serif'}}>
                Ring Lights
              </li>
              <li onClick={() => filterItem('Baby Products')} style={{ fontFamily: 'Outfit, sans-serif'}}>
                Baby Products
              </li>
              <li onClick={() => filterItem('Phones & Tablets')} style={{ fontFamily: 'Outfit, sans-serif'}}>
                Phones & Tablets
              </li>
              <li onClick={() => filterItem('Beauty Care')} style={{ fontFamily: 'Outfit, sans-serif'}}>
                Beauty Care
              </li>
              <li onClick={() => filterItem('Fashion & Watches')} style={{ fontFamily: 'Outfit, sans-serif'}}>
                Fashion & Watches
              </li>
            </ul>
          </div>
        </div>

        <div className='section-wrapper'>
          <div className='row'>
            {items.map((product) => (
              <div key={product.id} className='col-md-3 col-sm-6 mb-4'>
                <div className='course-item style-4' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'bold' }}>
                  <div className='course-inner' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal' }}>
                    <div className='course-thumb'>
                      <img src={product.imgUrl} alt={product.title} />
                      <div className='course-category' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal', color: '#690896' }}>
                        <a href='#'>{product.cate}</a>
                      </div>
                    </div>
                    <div className='course-content'>
                      <Link to={`/shop/${product.id}`} className='course-title' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'bold' }}>
                        {product.title}
                      </Link>
                      <div className='course-footer'>
                        <div className='course-author' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal', color: '#690896' }}>
                          <Link to='/'>{product.brand}</Link>
                        </div>
                        <div className='course-price' style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', color: '#690896', fontSize: '16px'}}>
                          {product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
