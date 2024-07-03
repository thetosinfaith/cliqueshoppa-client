import React from 'react';
import Banner from './Banner';
import HomeCategory from './HomeCategory';
import CategoryShowcase from './CategoryShowcase';
import Register from './Register';
import LocationSprade from './LocationSprade';
import Newsletter from './Newsletter';

const Home = () => {
    return(
        <div>
            <Banner/>
            <HomeCategory/>
            <CategoryShowcase/>
            <Register/>
            <LocationSprade/>
            <Newsletter/>
        </div>
    );
};

export default Home;
