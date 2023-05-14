import React, { createContext, useEffect, useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import axios from 'axios';


export const ProductContext = createContext();

const Home = () => {    

    return (
        <ProductContext.Provider>
            <Header></Header>
            <Outlet></Outlet>
        </ProductContext.Provider>
    );
};

export default Home;