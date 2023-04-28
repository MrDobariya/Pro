import React,{useState,useEffect} from 'react'
import Slider from '../components/Slider'
import Cardscg from '../components/Cardscg'
import CgDiv from '../components/CgDiv'
import ProductsC from '../components/ProductsC'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'


const Home = () => {
 
    return (
        <>
        <Helmet>
            <title>ATLANTA RESTORANT</title>
        </Helmet>
             <div>
                <Slider/>
                 <div className="cards">
                         <Cardscg title='Pizza'/>
                         <Cardscg title='Burger'/>
                         <Cardscg title='Coffee'/>                
                 </div>
                <CgDiv/>
                <ProductsC/>
        </div>
        </>
    )
}

export default Home
