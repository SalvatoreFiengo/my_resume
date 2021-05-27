import React from 'react';
import Navbar from './navbar';
import Background from '../../images/MaxPixel.net-Rome-Italy-Colosseum-Roman-Coliseum-City-2030643.jpg';

const Header = ({cvPosition, skillPosition,WorkHistoryPos, EducationPos})=>{
    return(
        <div className='header mb-5'>
            <Navbar cvPosition={cvPosition} skillPosition={skillPosition} WorkHistoryPos={WorkHistoryPos} EducationPos={EducationPos}/>
            <div className='header-img' style={{backgroundImage:`url(${Background})`}}>
            </div>
        </div>
    )
}
export default Header