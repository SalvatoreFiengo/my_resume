import React from 'react';
import Navbar from './navbar';
import Background from '../images/MaxPixel.net-Rome-Italy-Colosseum-Roman-Coliseum-City-2030643.jpg';

const Header = ()=>{
    return(
        <div className='header'>
            <Navbar/>
            <div className='header-img' style={{backgroundImage:`url(${Background})`}}></div>
        </div>
    )
}
export default Header