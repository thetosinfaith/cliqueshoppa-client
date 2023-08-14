import React from 'react';
import supplierImage from '../assets/images/bg-img/07.jpg'; // Adjust the path as necessary

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
                    <div className='col order-lg-2 order-2' style={{ paddingBottom: '70px' }}>
                        <div className='section-wrapper'>
                            <h4 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'bold', fontSize: '40px', color: '#690896' }}>Become a Clique - Supplier</h4>
                            <p style={{ fontFamily: 'Outfit, sans-serif', paddingBottom: '30px' }}>List your products and our resellers will sell them for you at zero cost.</p>
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
                                </select>
                                <textarea style={{ fontFamily: 'Outfit, sans-serif' }} name='productDescription' placeholder='Tell us a bit about your product' className='reg-input' />

                                <div style={{ paddingTop: '20px' }}>
                                    <label style={{ paddingRight: '10px' }}>
                                        <input type="radio" name='marketingConsent' value="yes" />
                                        Yes, I want to receive occasional marketing emails from CliqueShoppa
                                    </label>
                                    
                                </div>

                                <div style={{ paddingTop: '30px' }}>
                                    <button type='submit' className='submit form' style={{ background: '#690896', color: 'white', borderRadius: '10px' }}>
                                        Register Now
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
