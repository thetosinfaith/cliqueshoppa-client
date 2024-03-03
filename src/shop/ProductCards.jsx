import React from 'react';

const ProductCards = ({ Gridlist, products }) => {
  return (
    <div className={`shop-product-wrap row justify-content-center ${Gridlist ? 'grid' : 'list'}`}>
      {products.map((product, i) => (
        <div key={i} className='col-lg-4 col-md-6 col-12'>
          <div className='product-item'>

            {/* Product Images */}
            <div className='product-thumb'>
              <div className='pro-thumb'>
                <img src={product.img} alt={product.name} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
