import React from 'react';
import supplierImage from '../assets/images/bg-img/07.jpg'; 

const subTitle = '';
const title = (
    <h2></h2>
);
const desc = '';

const Register = () => {
    return (
        <section className='register' style={{ paddingTop: '70px' }}>
            <div className='container'>
                <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                    <div className='col order-lg-1 order-1'>
                        <div className='section-header'>
                            <img src={supplierImage} alt="Supplier" style={{ width: '100%', height: '80%', borderRadius: '20px'}} />
                            {subTitle && <span className='subtitle'>{subTitle}</span>}
                            {title}
                            {desc && <p>{desc}</p>}
                        </div>
                    </div>
                    <div className='col order-lg-2 order-2' style={{ paddingBottom: '60px' }}>
                        <div className='section-wrapper'>
                            <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '37px', color: '#690896' }}>Become a Clique - Supplier</h4>
                            <p style={{ fontFamily: 'Outfit, sans-serif', paddingTop: '15px' }}>List your products and our resellers will sell them for you at zero cost.</p>
                            <form register-form="true">
                                <input style={{ fontFamily: 'Outfit, sans-serif' }} type="text" name='businessName' placeholder="What's your business name?" className='reg-input' />
                                <input style={{ fontFamily: 'Outfit, sans-serif' }} type="email" name='email' placeholder='Email' className='reg-input' />
                                <input style={{ fontFamily: 'Outfit, sans-serif' }} type="tel" name='phone' placeholder='Please add country code (e.g., 234 805109872)' className='reg-input' />
                                <input style={{ fontFamily: 'Outfit, sans-serif' }} type="text" name='country' placeholder='Country' className='reg-input' />
                                <input style={{ fontFamily: 'Outfit, sans-serif' }} type="text" name='address' placeholder='Address' className='reg-input' />
                                <select style={{ fontFamily: 'Outfit, sans-serif' }} name='productCategory' className='reg-input'>
                                <option value="">Select Product Category</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="homeGoods">Home Goods</option>
                                <option value="beautyPersonalCare">Beauty and Personal Care</option>
                                <option value="toysGames">Toys and Games</option>
                                <option value="furniture">Furniture</option>
                                <option value="books">Books</option>
                                <option value="jewelryAccessories">Jewelry and Accessories</option>
                                <option value="babyKids">Baby and Kids</option>
                                <option value="officeSupplies">Office Supplies</option>
                                <option value="partySupplies">Party Supplies</option>
                                <option value="travelLuggage">Travel and Luggage</option>
                                <option value="laptop&phoneAccessories">Laptop & Phone Accessories</option>
                                <option value="homeDecor">Home Decor</option>
                                <option value="watchesJewelry">Watches and Jewelry</option>
                                <option value="cosmeticsMakeup">Cosmetics and Makeup</option>     
                                <option value="digital-products">Digital Products</option>
                                </select>
                                <textarea
                                    style={{ fontFamily: 'Outfit, sans-serif', height: '150px' }}
                                    name='productDescription'
                                    placeholder='Tell us a bit about your product'
                                    className='reg-input'
                                />
                                <div style={{ display: 'inline-flex', alignItems: 'center', marginTop: '30px', marginLeft: '-94px' }}>
                                    <input type="radio" name="marketingConsent" value="Yes" style={{ marginRight: '0px' , marginLeft: '94px'}} />
                                    <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', marginBottom: '0', paddingLeft: '8px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>Yes, I want to receive occasional marketing emails from CliqueShoppa</p>
                                </div>

                                <div style={{ paddingTop: '30px' }}>
                                    <button type='submit' className='submit form' style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', background: '#690896', color: 'white', borderRadius: '10px' }}>
                                        Become a Supplier
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
