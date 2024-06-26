import React from 'react';

const SelectedCategory = ({ select }) => {
  return (
    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 'normal'}}>
      <select value={select} onChange={(e) => console.log(e.target.value)}>
        <option value="all">All Categories</option>
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
    </div>
  );
}

export default SelectedCategory;
