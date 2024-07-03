import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from '../products.json'
import ProductCards from './ProductCards'
import { Pagination } from 'react-bootstrap'

const showResults = 'Showing 01 - 12 of 139 Results'

const Shop = () => {
    const [Gridlist, setGridlist] = useState(true);
    const [products, setProducts] = useState(Data);
    console.log(products)

    
  return (
    <div>
    <PageHeader title="All Products" curPage="Current Page" />

        {/* Shop section */}
        <div className="shop-page padding-tb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <article>
                            <div className="shop-title d-flex flex-wrap justify-content-between">
                                <p>{showResults}</p>
                                <div className={`product-view-mode ${Gridlist ? 'gridActive' : 'listActive'}`}>
                                    <a className='grid' onClick={() => setGridlist (!Gridlist)}>
                                        <i className='icofont-ghost' style={{color: '#690896'}}></i>
                                    </a>
                                    <a className='list' onClick={() => setGridlist (!Gridlist)}>
                                        <i className='icofont-listine-dots' style={{color: '#690896'}}></i>
                                    </a>
                                </div>
                            </div>

                            <div>

                            </div>
                            {/* Products Cards*/}
                            <div>
                                <ProductCards Gridlist={Gridlist} products={products}/>
                            </div>

                            <Pagination/>
                            
                        </article>
                    </div>
                    <div className="col-lg-4 col-12">
                        right side
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Shop