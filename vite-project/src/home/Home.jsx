import React from 'react';
import HomeComponent from "./home/Home";
import { Outlet } from 'react-router-dom';

const Home = () => {
    return(
        <>
        <nav>Home</nav>
        <Outlet/>
        </>
    )
}

export default Home;
