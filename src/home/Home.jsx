import React from 'react';
import Banner from './Banner';
import HomeCategory from './HomeCategory';
import CategoryShowcase from './CategoryShowcase';
import Register from './Register';

const Home = () => {
    return(
        <div>
            <Banner/>
            <HomeCategory/>
            <CategoryShowcase/>
            <Register/>
        </div>
    );
};

export default Home;
