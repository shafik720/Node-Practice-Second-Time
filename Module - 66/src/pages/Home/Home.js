import React, { createContext, useEffect, useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import axios from 'axios';


export const ProductContext = createContext();

const Home = () => {    

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;